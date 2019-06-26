import * as actionTypes from '../constants/index';

export default (state=[], action) => {
    switch(action.type) {
        case actionTypes.SET_CURRENT_USER:
            return action.user
        default:
            return state
    }
}