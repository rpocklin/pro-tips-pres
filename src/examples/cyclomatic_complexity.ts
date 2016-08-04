declare let Observable;
declare let FeatureFlagTypes;
declare let RequestStatusType;
declare let LinkButton;

function ngOnInit() {
    this.featureService
        .featureFlagged(FeatureFlagTypes.monthlyBillingEnabled)
        .subscribe(
            (result: boolean) => {
                this.monthlyBillingEnabled = result;
            }
        );
    Observable.forkJoin(
        this._api.GetOMMTracker(),
        this._contentService.getContent()
    ).subscribe(
        ([moveGetResponseModel, content]) => {
            if (moveGetResponseModel) {
                this.expiryDate = moveGetResponseModel.oneMinuteMove.expiryDate;
                this.status = RequestStatusType[moveGetResponseModel.oneMinuteMove.status];
            }

            let showTrackerFeatureFlag = false;
            if (content[this._appContentBranch]['oMMTracker'] && content[this._appContentBranch]['oMMTracker']['showTracker']) {
                showTrackerFeatureFlag =  content[this._appContentBranch]['oMMTracker']['showTracker'];
            }
            this.setOMMButton(this.status, this.expiryDate, showTrackerFeatureFlag);
            const contentNode = content[this._appContentBranch][this.content];

            this._eligibilityService.CheckEligibilityMyAccount().subscribe((eligibilityModel) => {
                const eligibility = eligibilityModel.find((e) => !!e.oneMinuteMove);
                let isEligibile = false;
                if (eligibility) {
                    isEligibile = eligibility.oneMinuteMove.isEligible;
                }

                this.jumpLinks = [];
                for (const key of Object.keys(contentNode)) {
                    const item = contentNode[key];
                    this.hideLink = false;
                    if (item.code === 'omm') {
                        this.hideLink = this.ommLink !== key;
                    }
                    const webSiteUrl = this._configService.current.aglSiteCoreWebsiteBaseUrl;
                    if ((item.url === `${webSiteUrl}/sts/account/login?returnApp=OneMinuteMove&returnPath=%2Fsignup%23connection%2FrequestType%2FMI`) && isEligibile) {
                        item.url = `${webSiteUrl}/sts/account/login?returnApp=OneMinuteMove&returnPath=${encodeURIComponent('/apps/one-minute-move')}`;
                    }
                    if (!this.hideLink) {
                        if (this.isJumpLinkValid(item)) {
                            this.jumpLinks.push(new LinkButton(item.label, item.isFeatured, item.url, item.image, item.note, item.title));
                        }
                    }
                }
                this.jumpLinksPopulated = true;
            });
        });
    }
