import * as actionTypes from '../constants/index';

export const toggleModal = () => {
    return {
        type: actionTypes.TOGGLE_MODAL
    }
}

export const toggleShowSignup = () => {
    return {
        type: actionTypes.TOGGLE_SHOW_SIGNUP
    }
}

export const toggleShowLogin = () => {
    return {
        type: actionTypes.TOGGLE_SHOW_LOGIN
    }
}

export const resetModal = () => {
    return {
        type: actionTypes.RESET_MODAL,
    }
}