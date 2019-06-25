import * as actionTypes from '../constants/index.js';

export const toggleLoading = () => {
    return {
        action: actionTypes.TOGGLE_LOADING
    }
}

export const toggleError = () => {
    return {
        action: actionTypes.TOGGLE_ERROR
    }
}