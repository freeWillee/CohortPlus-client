import * as actionTypes from '../constants/index';

const initialState = {
    directory: [],
    positions: [],
    deleteUserId: "",
}

export default (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_USERS:
            return {
                ...state,
                directory: action.users,        
            }
        case actionTypes.SET_USER_TO_DELETE:
        return {
            ...state,
            deleteUserId: action.userId,
        }
        case actionTypes.RESET_USER_TO_DELETE:
        return {
            ...state,
            deleteUserId: "",
        }
        case actionTypes.GET_POSITIONS:
            return {
                ...state,
                positions: action.positions,
            }
        default:
            return state
    }
}