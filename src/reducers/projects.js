import * as actionTypes from '../constants/index';

const initialState = {
    listing: [],
}

export default (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_PROJECTS:
            return {
                ...state,
                listing: action.projects,        
            }
        case actionTypes.FETCHING_PROJECTS:
        case actionTypes.ADD_NEW_PROJECT:
            return {
                ...state
            }
        default:
            return state
    }
}