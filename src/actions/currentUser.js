import * as actionTypes from '../constants/index';
import { resetLoginForm } from './loginForm';
import { getMyTasks } from './myTasks';
import { getPositions } from './users';
import { clearMyTasks } from './myTasks';

// sync actions
export const setCurrentUser = user => {
    return {
        type: actionTypes.SET_CURRENT_USER,
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: actionTypes.CLEAR_CURRENT_USER
    }
}

// async actions

export const login = (credentials, history) => {
    console.log("[LOGIN_ASYNC_ACTION - <credentials> = ]", credentials)
    return dispatch => {
        fetch("http://localhost:3001/api/v1/login", {
            credentials: "include",
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
                console.log(user.error)
            } else {
                dispatch(setCurrentUser(user.data))
                dispatch(getPositions())
                dispatch(getMyTasks())
                dispatch(resetLoginForm())
                history.push("/my-tasks")
            }
        })
        .catch()
    }
}

export const logout = (history) => {
    return dispatch => {
        
        dispatch(clearCurrentUser())
        
        fetch("http://localhost:3001/api/v1/logout", {
            credentials: "include",
            method: "DELETE",            
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            }
            else {
                dispatch(clearMyTasks())
                alert(response.message)
                history.push('/')
            }
        })
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        fetch("http://localhost:3001/api/v1/get_current_user", {
            credentials: "include",
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(user => {
            console.log(user.data)
            if (user.error) {
                console.log('[GET_CURRENT_USER_ACTION]: ',user.error)
            } else {
                dispatch(setCurrentUser(user.data))
                dispatch(getPositions())
                dispatch(getMyTasks())
            }
        })
        .catch()
    }
}
