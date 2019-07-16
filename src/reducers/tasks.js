import * as actionTypes from '../constants/index';

const initialState = []

export default (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_TASKS:
            return action.tasks
        default:
            return state
    }
}