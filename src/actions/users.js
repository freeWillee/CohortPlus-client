import * as actionTypes from '../constants/index.js';

export const getUsers = () => {
    return dispatch => {
        
        dispatch({type: actionTypes.FETCHING_USERS})

        return fetch('http://localhost:3001/api/v1/users')
            .then(resp => resp.json())
            .then(usersJSONED => {
                console.log('[IN ASYNC GET_USERS ACTION]: ', usersJSONED.data)
                const users = usersJSONED.data
                dispatch({
                    type: actionTypes.GET_USERS,
                    users
                })
            })
            .catch(err => console.log('[FETCH_USERS_ERROR]: ', err))
    }
}

export const createNewUser = (formData, ownProps) => {
    return dispatch => {
        fetch(
            'http://localhost:3001/api/v1/users', {
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
            console.log('[CREATE_USER_ERROR]: ', err)
        })
    }
}

export const getPositions = () => {
    return dispatch => {
        
        dispatch({type: actionTypes.FETCHING_POSITIONS})

        return fetch('http://localhost:3001/api/v1/positions')
            .then(resp => resp.json())
            .then(positionsJSONED => {
                console.log('[IN ASYNC GET_POSITIONS ACTION]: ', positionsJSONED.data)
                const positions = positionsJSONED.data
                dispatch({
                    type: actionTypes.GET_POSITIONS,
                    positions
                })
            })
            .catch(err => console.log('[FETCH_POSITIONS_ERROR]: ', err))
    }
}