import * as actionTypes from '../constants/index';

// SYNC ACTIONS
export const setMyProjects = projects => {
    return {
        type: actionTypes.SET_MY_PROJECTS,
        projects
    }
}

export const clearMyProjects = () => {
    return {
        type: actionTypes.CLEAR_MY_PROJECTS
    }
}


// ASYNC ACTIONS
export const getMyProjects = (userId) => {
    return dispatch => {
        
        return fetch(`http://localhost:3001/api/v1/users/${userId}/projects`, {
            credentials: "include",
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(projects => {
            console.log(projects.data)
            
            if (projects.error) {
                alert(projects.error)
            } else {
                dispatch(setMyProjects(projects.data))
            }
        })
        .catch(console.log())
    }
}