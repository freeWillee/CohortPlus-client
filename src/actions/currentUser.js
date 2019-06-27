import * as actionTypes from '../constants/index';

// sync actions
export const setCurrentUser = user => {
    return {
        type: actionTypes.SET_CURRENT_USER,
        user
    }
}

export const clearCurrentUser = () => {
    type: actionTypes.CLEAR_CURRENT_USER
}

// async actions

export const login = credentials => {
    console.log("[LOGIN CREDENTIALS]", credentials)
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
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
            } else {
                dispatch(setCurrentUser(user.data))
            }
        })
        .catch()
    }
}

export const logout = () => {
    return dispatch => {
        
        dispatch(clearCurrentUser())
        
        fetch("http://localhost:3001/api/v1/logout", {
            credentials: "include",
            method: "DELETE",            
        })
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/get_current_user", {
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
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user.data))
            }
        })
        .catch()
    }
}
