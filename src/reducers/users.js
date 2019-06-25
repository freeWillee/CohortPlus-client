import * as actionTypes from '../constants/index';

const initialState = {
    directory: [],
    positions: [],
}

export default (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_USERS:
            return {
                ...state,
                directory: action.users,        
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