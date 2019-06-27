import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/currentUser';

const Login = ({logout}) => {            
    const handleSubmit = event => {
        event.preventDefault()
        logout()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="submit" value="Logout" />
            </form>
        </div>
    )  
}

export default connect(null, {logout})(Login);