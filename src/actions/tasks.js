import {getMyTasks} from './myTasks';
import {getProjects} from './projects';
export const createNewTask = (formData, ownProps) => {
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