import React from 'react';
import {connect} from 'react-redux';
import {updateSignupForm} from '../../actions/signupForm';
import {signup} from '../../actions/signupForm';
import classes from './Signup.module.css';

// @material-ui -> for radio buttons
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Signup = ({signupFormData, updateSignupForm, signup, history, positions}) => {        
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
        signup(signupFormData, history)
    }

    return (
        <div className={classes.Container}>
            <h1>Signup</h1>
            <h5>Enter information below:</h5>
            <form className={classes.SignupForm} onSubmit={handleSubmit}>
                <input type="text" onChange={handleInputChange} name="username" value={signupFormData.username} placeholder="Username"/>
                <input type="text" onChange={handleInputChange} name="password" value={signupFormData.password} placeholder="Password"/>
                <input type="text" onChange={handleInputChange} name="first_name" value={signupFormData.first_name} placeholder="First Name"/>
                <input type="text" onChange={handleInputChange} name="last_name" value={signupFormData.last_name} placeholder="Last Name"/>
                <input type="text" onChange={handleInputChange} name="email" value={signupFormData.email} placeholder="Email"/>
                {/* <input type="text" onChange={handlePositionChange} name="title" value={signupFormData.position.title} placeholder="Title"/> */}
                <FormControl component="section">
                    <FormLabel>Select Position to Assign</FormLabel>
                    <RadioGroup
                        aria-label="Position"
                        name="position"                    
                        onChange={handlePositionChange}
                        defaultValue={signupFormData.position}
                    >
                    {positions.map(position=>{
                        return (
                            <FormControlLabel 
                            key={position.id} 
                            value={position.attributes.title} 
                            control={<Radio />}
                            label={position.attributes.title} 
                            />
                            )
                        })}
                    </RadioGroup>
                </FormControl>
                <input type="submit" value="Signup" />
            </form>
        </div>
    )  
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm,
        positions: state.users.positions,
    }
}

export default connect(mapStateToProps, {updateSignupForm, signup})(Signup);