import * as actionTypes from '../constants/index';

const initialState = {
    directory: [],
    filterProjectId: "",
}

export default (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_MY_TASKS:
            return {
                ...state,
                directory: action.tasks
            }
        case actionTypes.SET_PROJECT_ID:
            return {
                ...state,
                filterProjectId: action.projectId
            }
        case actionTypes.RESET_FILTER:
            return {
                ...state,
                filterProjectId: ""
            }
        case actionTypes.RESET_MY_TASKS:
            return initialState
        default:
            return state
    }
}