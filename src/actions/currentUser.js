import * as actionTypes from '../constants/index';
import { resetLoginForm } from './loginForm';
import { getMyTasks } from './myTasks';
import { getMyProjects } from './myProjects';
import { getPositions } from './users';
import { resetMyTasks } from './myTasks';
import { clearMyProjects } from './myProjects';

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
                dispatch(getMyTasks(user.data.id))
                dispatch(getMyProjects(user.data.id))
                dispatch(resetLoginForm())
                history.push("/my-dashboard")
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
                dispatch(resetMyTasks())
                dispatch(clearMyProjects())
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
                dispatch(getMyProjects(user.data.id))
            }
        })
        .catch()
    }
}
