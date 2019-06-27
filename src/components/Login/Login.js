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
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleInputChange} name="username" value={loginFormData.username} placeholder="username"/>
                <input type="text" onChange={handleInputChange} name="password" value={loginFormData.password} placeholder="password"/>
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