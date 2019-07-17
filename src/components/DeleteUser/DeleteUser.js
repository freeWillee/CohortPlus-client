import React from 'react';
import {connect} from 'react-redux';
import classes from './DeleteUser.module.css';
import {deleteUser} from '../../actions/users';
import Aux from '../hoc/Aux/Aux';

const DeleteUser = ({deleteUser, history}) => {            
    const handleSubmit = event => {
        event.preventDefault()
        if (event.target.name === 'delete') {
            console.log("cancelled delete user -- should redirect")
        } else {
            console.log("proceed to delete user")
        }
        // deleteUser(history)
    }

    return (
        <Aux>
            <form onSubmit={handleSubmit} className={classes.LogoutButton}>
                <input type="submit" name="cancel" value="Cancel" />
                <input type="submit" name="delete" value="DELETE" />
            </form>
        </Aux>
    )  
}

export default connect(null, {deleteUser})(DeleteUser);