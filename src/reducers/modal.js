import * as actionTypes from '../constants/index';

const initialState = {
    showModal: false,
    showSignup: false,
    showLogin: false,
    showDeleteUser: false,
}

export default (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_MODAL:
            return {
                ...state,
                showModal: !state.showModal
            }
            case actionTypes.TOGGLE_SHOW_SIGNUP:
                return {
                    ...state,
                    showSignup: !state.showSignup
            }
            case actionTypes.TOGGLE_SHOW_LOGIN:
                return {
                    ...state,
                    showLogin: !state.showLogin
            }
            case actionTypes.TOGGLE_DELETE_USER:
                return {
                    ...state,
                    showDeleteUser: !state.showDeleteUser
            }
            case actionTypes.RESET_MODAL:
                return initialState
        default:
            return state
    }
}