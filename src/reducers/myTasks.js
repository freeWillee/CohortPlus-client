import * as actionTypes from '../constants/index';

export default (state=[], action) => {
    switch(action.type) {
        case actionTypes.SET_MY_TASKS:
            return action.tasks
        case actionTypes.CLEAR_MY_TASKS:
            return []
        default:
            return state
    }
}