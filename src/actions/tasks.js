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
        .then(ownProps.history.push('/projects'))
        .catch(err => {
            console.log('[CREATE_TASK_ERROR]: ', err)
        })
    }
}