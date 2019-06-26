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
        default:
            return state
    }
}