import * as actionTypes from '../constants/index';

// SYNC ACTIONS
export const setMyTasks = tasks => {
    return {
        type: actionTypes.SET_MY_TASKS,
        tasks
    }
}

export const clearMyTasks = () => {
    return {
        type: actionTypes.CLEAR_MY_TASKS
    }
}


// ASYNC ACTIONS
export const getMyTasks = () => {
    return dispatch => {
        
        return fetch("http://localhost:3001/api/v1/tasks", {
            credentials: "include",
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(tasks => {
            console.log(tasks.data)
            
            if (tasks.error) {
                alert(tasks.error)
            } else {
                dispatch(setMyTasks(tasks.data))
            }
        })
        .catch(console.log())
    }
}