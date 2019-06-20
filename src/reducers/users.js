import * as actionTypes from '../constants/index';

const initialState = {
    directory: [],
    positions: [],
    updating: false
}

export default (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_USERS:
            return {
                ...state,
                directory: action.users,
                updating: false
            }
        case actionTypes.GET_POSITIONS:
            return {
                ...state,
                positions: action.positions,
                updating: false
            }            
        case actionTypes.FETCHING_USERS:
        case actionTypes.FETCHING_POSITIONS:
        case actionTypes.ADD_NEW_USER:
            return {
                ...state,
                updating: true
            }
        default:
            return state
    }
}