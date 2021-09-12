import { alertsConstants } from 'constants/alerts';

export function alerts(state = {}, action) {
    switch (action.type) {
        case alertsConstants.SUCCESS:
            return {
                type: 'alert-success',
                message: action.message
            };
        case alertsConstants.ERROR:
            return {
                type: 'alert-danger',
                message: action.message
            };
        case alertsConstants.CLEAR:
            return {};
        default:
            return state
    }
}