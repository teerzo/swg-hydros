import { alertsConstants } from 'constants/alerts';

export const alertsActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: alertsConstants.SUCCESS, message };
}

function error(message) {
    return { type: alertsConstants.ERROR, message };
}

function clear() {
    return { type: alertsConstants.CLEAR };
}