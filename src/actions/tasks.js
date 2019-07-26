import * as actionTypes from '../constants/index.js';
import {getMyTasks} from './myTasks';
import {getProjects} from './projects';
import {getMyProjects} from './myProjects';


export const setTaskToDelete = (taskId) => {
    return {
        type: actionTypes.SET_TASK_TO_DELETE,
        taskId
    }
}
export const resetTaskToDelete = () => {
    return {
        type: actionTypes.RESET_TASK_TO_DELETE,
    }
}

// ASYNC ACTIONS

export const getTasks = () => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/tasks')
            .then(resp => resp.json())
            .then(tasksJSONED => {
                console.log('[GET_TASKS ACTION] - data from server: ', tasksJSONED.data)
                const tasks = tasksJSONED.data
                if (!!tasks) {
                    dispatch({
                        type: actionTypes.GET_TASKS,
                        tasks
                    })
                }
            })
            .catch(err => console.log('[FETCH_TASKS_ERROR]: ', err))
    }
}


export const createNewTask = (formData, ownProps, currentUserId) => {
    return dispatch => {
        fetch(
            'http://localhost:3001/api/v1/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
        .then(resp => {
            if(resp.ok) {
                dispatch(getMyTasks())
                dispatch(getProjects())
                dispatch(getMyProjects(currentUserId))
                ownProps.history.push('/my-dashboard');
              } else {
                throw Error(`Request rejected with the following message ${resp.status}`);
              }
            })
        .catch(err => {
            console.log('[CREATE_TASK_ERROR]: ', err)
        })
    }
}

export const editTask = (formData, ownProps) => {
    return dispatch => {
        console.log('[editTaskAction]', 'formData: ', formData, 'ownProps: ', ownProps)
        fetch(
            `http://localhost:3001/api/v1/tasks/${formData.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },                
                body: JSON.stringify(formData)
            })
        .then(resp => {
            if(resp.ok) {
                dispatch(getMyTasks())
              } else {
                throw Error(`Request rejected with the following message ${resp.status}`);
              }
        })
        .catch(err => {
            console.log('[CREATE_USER_ERROR]: ', err)
        })
    }
}

export const deleteTask = (formData, currentUserId) => {
    return dispatch => {
        console.log('[deleteTaskAction]', 'formData: ', formData)

        fetch(
            `http://localhost:3001/api/v1/tasks/${parseInt(formData)}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },                
                body: JSON.stringify(formData)
            })
        .then(resp => {
            if(resp.ok) {
                console.log(resp)
                dispatch(getTasks())
                dispatch(getMyTasks(currentUserId))
                dispatch(getMyProjects(currentUserId))
              } else {
                throw Error(`Request rejected with the following message ${resp.status}`);
              }
        })
        .catch(err => {
            console.log('[DELETE_USER_ERROR]: ', err)
        })
    }
}