export enum SolarCheckRegisterState {
    WELCOME       = <any> 'WELCOME',
    PREREQUISTE   = <any> 'PREREQUISTE',
    UNSUITABLE    = <any> 'UNSUITABLE',
    SOLAR_DETAILS = <any> 'SOLAR_DETAILS',
    REGISTER      = <any> 'REGISTER',
    COMPLETE      = <any> 'COMPLETE'
};

const processState = (state: SolarCheckRegisterState) => {
    switch (state) {
        case SolarCheckRegisterState.WELCOME: {
            this._processWelcomeStep();
            break;
        }
        case SolarCheckRegisterState.PREREQUISTE: {
            this._processPrerequisteStep();
            break;
        }
        case SolarCheckRegisterState.UNSUITABLE: {
            this._processUnsuitableStep();
            break;
        }
        case SolarCheckRegisterState.SOLAR_DETAILS: {
            this._processSolarDetailsStep();
            break;
        }
        case SolarCheckRegisterState.REGISTER: {
            this._processRegisterStep();
            break;
        }
        case SolarCheckRegisterState.COMPLETE: {
            this._processComplete();
        }
        default: {
            this._welcomeState();
            break;
        }
    }
    return true;
}