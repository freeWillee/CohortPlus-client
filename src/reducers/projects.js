import * as actionTypes from '../constants/index';

const initialState = {
    listing: [],
    updating: false
}

export default (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_PROJECTS:
            return {
                ...state,
                listing: action.projects,
                updating: false
            }
        case actionTypes.FETCHING_PROJECTS:
        case actionTypes.ADD_NEW_PROJECT:
            return {
                ...state,
                updating: true
            }
        default:
            return state
    }
}