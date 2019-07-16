import * as actionTypes from '../constants/index';
import {setCurrentUser} from './currentUser';
import {getUsers} from './users';
import {getProjects} from './projects';

export const updateSignupForm = formData => {
    return {
        type: actionTypes.UPDATE_SIGNUP_FORM,
        formData  
    }
}

export const resetSignupForm = () => {
    return {
        type: actionTypes.RESET_SIGNUP_FORM
    }
}

export const signup = (credentials, history) => {
    console.log("[Signup CREDENTIALS]", credentials)
    return dispatch => {
        const userInfo = {
            user: credentials
        }
        return fetch("http://localhost:3001/api/v1/signup", {
            credentials: "include",
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user.data))
                dispatch(getUsers())
                dispatch(getProjects())
                dispatch(resetSignupForm())
                history.push('/my-dashboard');
            }
        })
        .catch(err=>console.log(err))
    }
}