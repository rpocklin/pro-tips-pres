export enum SolarCheckRegisterState {
    WELCOME       = <any> 'WELCOME',
    PREREQUISTE   = <any> 'PREREQUISTE',
    UNSUITABLE    = <any> 'UNSUITABLE',
    SOLAR_DETAILS = <any> 'SOLAR_DETAILS',
    REGISTER      = <any> 'REGISTER',
    COMPLETE      = <any> 'COMPLETE'
}

const processState = (state: SolarCheckRegisterState) => {
    const mapStateToProcess = {

        [SolarCheckRegisterState.WELCOME]:         this._processWelcomeStep,
        [SolarCheckRegisterState.PREREQUISTE]:     this._processPrerequisteStep,
        [SolarCheckRegisterState.UNSUITABLE]:      this._processUnsuitableStep,
        [SolarCheckRegisterState.SOLAR_DETAILS]:   this._processSolarDetailsStep,
        [SolarCheckRegisterState.REGISTER]:        this._processRegisterStep,
        [SolarCheckRegisterState.COMPLETE]:        this._processComplete
    }

    const process = mapStateToProcess[state] || this.welcomeState();
    process();

    return true;
}

// Better
// 1.  16 LOC vs 33 (half the size) without being harder to understand
// 2.  no `break` keyword required (less fragile code)
// 3.  easier to verify all states are handled