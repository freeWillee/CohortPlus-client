import * as actionTypes from '../constants/index.js';

export const getUsers = () => {
    console.log('[IN getUserAction]')
    return dispatch => {

        return fetch('http://localhost:3001/api/v1/users')
            .then(resp => resp.json())
            .then(usersJSONED => {
                console.log('[GET_USERS ACTION] - data from server: ', usersJSONED.data)
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
                dispatch(getUsers())
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

export const editUser = (formData, ownProps) => {
    return dispatch => {
        console.log('[editUserAction]', 'formData: ', formData, 'ownProps: ', ownProps)

        fetch(
            `http://localhost:3001/api/v1/users/${formData.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },                
                body: JSON.stringify(formData)
            })
        .then(resp => {
            if(resp.ok) {
                dispatch(getUsers())
              } else {
                throw Error(`Request rejected with the following message ${resp.status}`);
              }
        })
        .catch(err => {
            console.log('[CREATE_USER_ERROR]: ', err)
            dispatch({
                type: actionTypes.TOGGLE_ERROR
            })
        })
    }
}

export const getPositions = () => {
    console.log('[IN getPositionsAction]')
    return dispatch => {

        return fetch('http://localhost:3001/api/v1/positions')
            .then(resp => resp.json())
            .then(positionsJSONED => {
                console.log('[GetPositions action - data from server]: ', positionsJSONED.data)
                const positions = positionsJSONED.data
                dispatch({
                    type: actionTypes.GET_POSITIONS,
                    positions
                })
            })            
            .catch(err => {
                console.log('[FETCH_POSITIONS_ERROR]: ', err)
            })
    }
}