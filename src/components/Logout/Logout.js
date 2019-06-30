import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/currentUser';
import classes from './Logout.module.css';

const Logout = ({logout, history}) => {            
    const handleSubmit = event => {
        event.preventDefault()
        logout(history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="submit" value="Logout" />
        </form>
    )  
}

export default connect(null, {logout})(Logout);