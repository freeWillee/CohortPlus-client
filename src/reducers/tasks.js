import * as actionTypes from '../constants/index';

const initialState = {
    deleteTaskId: "",
}

export default (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_TASKS:
            return action.tasks
        case actionTypes.SET_TASK_TO_DELETE:
            return {
                ...state,
                deleteTaskId: action.taskId,
            }
        case actionTypes.RESET_TASK_TO_DELETE:
        return {
            ...state,
            deleteTaskId: "",
        }            
        default:
            return state
    }
}