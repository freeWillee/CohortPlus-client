import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
// @material-ui library
import { InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
// @material-ui -> for radio buttons
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import classes from './NewUserForm.module.css';


class NewUserForm extends Component {
    state = {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: "",
        profile_url: "",
        position: this.props.positions[0].attributes.title,
        showPassword: false,
        isSignUp: false,
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        const {submitFormAction} = this.props
        event.preventDefault()
        submitFormAction(this.state)
    }

    handlePositionChange = event => {
        this.setState({
            position: event.target.value
        })
    }

    handleClickShowPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    render() {        
        const {positions, formTitle} = this.props
            return (
                <div>
                    <h1 className={classes.Heading}>{formTitle}</h1>
                    <form onSubmit={this.handleSubmit} className={classes.FormContainer} >
                        <TextField
                            id="username"                    
                            required
                            className={classes.TextField}
                            label="Username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}                 
                            margin="normal"
                        />
                        <TextField
                            id="password"
                            required
                            className={classes.TextField}
                            label="Password"
                            name="password"
                            type={this.state.showPassword ? "text" : "password"}
                            value={this.state.password}
                            onChange={this.handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                        >
                                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            margin="normal"
                        />
                        <TextField                     
                            id="first_name"
                            className={classes.TextField}
                            label="First Name"
                            name="first_name"
                            value={this.state.first_name}
                            onChange={this.handleChange}
                            margin="normal"
                        />
                        <TextField                     
                            id="last_name"
                            className={classes.TextField}
                            label="Last Name"
                            name="last_name"
                            value={this.state.last_name}
                            onChange={this.handleChange}
                            margin="normal"
                        />
                        <TextField
                            id="email"
                            required                   
                            className={classes.TextField}
                            label="Email"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            margin="normal"
                        />
                        <TextField                     
                            id="profile_url"
                            className={classes.TextField}
                            label="Profile Picture URL"
                            name="profile_url"
                            value={this.state.profile_url}
                            onChange={this.handleChange}
                            margin="normal"
                            helperText="Optional"
                        />
                        <FormControl component="section">
                            <FormLabel>Select Position to Assign</FormLabel>
                            <RadioGroup
                                aria-label="Position"
                                name="position"                    
                                onChange={this.handlePositionChange}
                                defaultValue={this.state.position}
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
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </div>
            )        
    }
}

export default NewUserForm;