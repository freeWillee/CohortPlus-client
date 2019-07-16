import React from 'react';
import {connect} from 'react-redux';
import {updateLoginForm} from '../../actions/loginForm';
import {login} from '../../actions/currentUser';
import classes from './Login.module.css';

const Login = ({loginFormData, updateLoginForm, login, history}) => {        
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
        login(loginFormData, history)
    }

    return (
        <div className={classes.Container}>
            <h1>Login</h1>
            <h5>Enter information below:</h5>
            <form className={classes.LoginForm} onSubmit={handleSubmit}>
                <input type="text" onChange={handleInputChange} name="username" value={loginFormData.username} placeholder="Username"/>
                <input type="text" onChange={handleInputChange} name="password" value={loginFormData.password} placeholder="Password"/>
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