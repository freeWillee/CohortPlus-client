import * as actionTypes from '../constants/index';

export default (state=null, action) => {
    switch(action.type) {
        case actionTypes.SET_CURRENT_USER:
            return action.user
        case actionTypes.CLEAR_CURRENT_USER:
            return null
        default:
            return state
    }
}