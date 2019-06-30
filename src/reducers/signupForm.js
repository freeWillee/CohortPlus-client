import * as actionTypes from '../constants/index';

const initialState = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',
    position: '',
    isSignUp: true,
}

export default (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_SIGNUP_FORM:
            return action.formData
        case actionTypes.RESET_SIGNUP_FORM:
            return initialState
        default:
            return state
    }
}