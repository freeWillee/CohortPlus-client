import * as actionTypes from '../constants/index';

const initialState = {
    listing: [],
    deleteProjectId: "",
}

export default (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_PROJECTS:
            return {
                ...state,
                listing: action.projects,        
            }
        case actionTypes.SET_PROJECT_TO_DELETE:
            return {
                ...state,
                deleteProjectId: action.projectId,
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