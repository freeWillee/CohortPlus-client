import * as actionTypes from '../constants/index.js';

export const getProjects = () => {
    return dispatch => {

        return fetch('http://localhost:3001/api/v1/projects')
            .then(resp => resp.json())
            .then(projectsJSONED => {
                console.log('[GET_PROJECTS ACTION] - data from server: ', projectsJSONED.data)
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
                ownProps.history.push('/projects');
              } else {
                throw Error(`Request rejected with the following message ${resp.status}`);
              }

        })
        .catch(err => {
            console.log('[CREATE_PROJECT_ERROR]: ', err)
        })
    }
}