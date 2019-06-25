import * as actionTypes from '../constants/index';

const initialState = {
    isLoading: false,
    errorPresent: false,
    errorMessages: []
}

export default (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_LOADING:
            return {
                ...state,
                isLoading: !state.isLoading
            }
        case actionTypes.TOGGLE_ERROR:
            return {
                ...state,
                errorPresent: !state.errorPresent
            }
        default:
            return state
    }
}