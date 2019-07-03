import * as actionTypes from '../constants/index';
const initialState = []
export default (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_MY_PROJECTS:
            return action.projects
        case actionTypes.CLEAR_MY_PROJECTS:
            return initialState
        default:
            return state
    }
}