import React from 'react';
import {connect} from 'react-redux';
import {updateSignupForm} from '../../actions/signupForm';
import {signup} from '../../actions/signupForm';
import classes from './Signup.module.css';

const Signup = ({signupFormData, updateSignupForm, signup}) => {        
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value,
        }
        updateSignupForm(updatedFormInfo)
    }
    const handlePositionChange = event => {
        const { value } = event.target
        const updatedFormInfo = {
            ...signupFormData,
            position: value,
            }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
             event.preventDefault()
        signup(signupFormData)
    }

    return (
        <div className={classes.Container}>
            <h1>Signup</h1>
            <form className={classes.SignupForm} onSubmit={handleSubmit}>
                <input type="text" onChange={handleInputChange} name="username" value={signupFormData.username} placeholder="Username"/>
                <input type="text" onChange={handleInputChange} name="password" value={signupFormData.password} placeholder="Password"/>
                <input type="text" onChange={handleInputChange} name="first_name" value={signupFormData.first_name} placeholder="First Name"/>
                <input type="text" onChange={handleInputChange} name="last_name" value={signupFormData.last_name} placeholder="Last Name"/>
                <input type="text" onChange={handleInputChange} name="email" value={signupFormData.email} placeholder="Email"/>
                <input type="text" onChange={handlePositionChange} name="title" value={signupFormData.position.title} placeholder="Title"/>
                <input type="submit" value="Signup" />
            </form>
        </div>
    )  
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm,
    }
}

export default connect(mapStateToProps, {updateSignupForm, signup})(Signup);