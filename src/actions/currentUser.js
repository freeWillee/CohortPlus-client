import * as actionTypes from '../constants/index';

// sync actions
export const setCurrentUser = user => {
    return {
        type: actionTypes.SET_CURRENT_USER,
        user
    }
}

// async actions

export const login = credentials => {
    console.log("[LOGIN CREDENTIALS]", credentials)
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
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
                dispatch(setCurrentUser(user))
            }
        })
        .catch()
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/get_current_user", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user))
            }
        })
        .catch()
    }
}
