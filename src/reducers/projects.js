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
        case actionTypes.DELETE_PROJECT:
            console.log('IN DELETE PROJECT REDUCER - HERE IS THE FORMDATA: ', action.formData)
            return {
                ...state,
            }
        default:
            return state
    }
}