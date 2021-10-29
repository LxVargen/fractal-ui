export function checkFatal(errorId: number) {
    switch(errorId) {
        case 0x01:
            return true;
            break;
        default:
            return false;
    }
}

export function errorMessage(errorId: number) {
    switch(errorId) {
        case 0x01:
            return "IPC connection could not be established";
            break;
        default:
            return "Unspecified error encountered";
    }
}

export function warningMessage(warnId: number) {
    switch(warnId) {
        case 0x01:
            return "replace me";
            break;
        default:
            return "Unspecified warning encountered";
    }
}