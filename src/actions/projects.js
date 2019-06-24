import * as actionTypes from '../constants/index.js';

export const getProjects = () => {
    return dispatch => {
        
        dispatch({type: actionTypes.FETCHING_PROJECTS})

        return fetch('http://localhost:3001/api/v1/projects')
            .then(resp => resp.json())
            .then(projectsJSONED => {
                console.log('[IN ASYNC GET_PROJECTS ACTION]: ', projectsJSONED.data)
                const projects = projectsJSONED.data
                dispatch({
                    type: actionTypes.GET_PROJECTS,
                    projects
                })
            })
            .catch(err => console.log('[FETCH_PROJECTS_ERROR]: ', err))
    }
}

export const createNewProject = (formData, ownProps) => {
    return dispatch => {
        fetch(
            'http://localhost:3001/api/v1/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },                
                body: JSON.stringify(formData)
            })
        .then(resp => {
            if(resp.ok) {
                const users = resp
                dispatch({
                    type: actionTypes.GET_USERS,
                    users
                })
              } else {
                throw Error(`Request rejected with the following message ${resp.status}`);
              }
              ownProps.history.push('/users');
        })
        .catch(err => {
            console.log('[CREATE_PROJECT_ERROR]: ', err)
        })
    }
}