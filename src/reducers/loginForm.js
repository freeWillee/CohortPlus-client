import * as actionTypes from '../constants/index';

const initialState = {
    username: "",
    password: "",
}

export default (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_LOGIN_FORM:
            return action.formData
        default:
            return state
    }
}