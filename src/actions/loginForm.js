import * as actionTypes from '../constants/index';

export const updateLoginForm = formData => {
    return {
        type: actionTypes.UPDATE_LOGIN_FORM,
        formData  
    }
}

export const resetLoginForm = () => {
    return {
        type: actionTypes.RESET_LOGIN_FORM
    }
}