import React from 'react';
import {connect} from 'react-redux';
import {updateLoginForm} from '../../actions/loginForm';
import {login} from '../../actions/currentUser';

const Login = ({loginFormData, updateLoginForm, login}) => {        
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value,
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData)
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type="text" onChange={handleInputChange} name="username" value={loginFormData.username} />
                <label>Password: </label>
                <input type="text" onChange={handleInputChange} name="password" value={loginFormData.password} />
                <input type="submit" value="Login" />
            </form>
        </div>
    )  
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, {updateLoginForm, login})(Login);