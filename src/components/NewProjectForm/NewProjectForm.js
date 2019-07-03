import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import classes from './NewProjectForm.module.css';

// @material-ui library
import Button from '@material-ui/core/Button';


class NewProjectForm
 extends Component {

    state = {
        title: "",
        description: "",
        deadline: "",
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log("Submitting New Project: ", this.state)
        this.props.createProject(this.state)
    }

    handleUserChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleProjectChange = event => {
        this.setState({
            project: event.target.value
        })
    }

    render() {       
        return (
            <div className={classes.FormContainer}>
                <h1 className={classes.Heading}>New Project</h1>
                <form onSubmit={this.handleSubmit} className={classes.FormContainer} >
                    <TextField
                        id="title"                    
                        required
                        className={classes.TextField}
                        label="Title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}                    
                        margin="normal"
                    />
                    <TextField
                        id="description"                 
                        className={classes.TextField}
                        label="Project Description"
                        name="description"
                        multiline
                        value={this.state.description}
                        onChange={this.handleChange}                        
                        margin="normal"
                    />
                    <TextField
                        id="deadline"
                        label="Project Deadline"
                        required
                        name="deadline"
                        value={this.state.deadline}
                        onChange={this.handleChange}
                        helperText="YYYY-MM-DD"
                        margin="normal"
                        variant="filled"
                    />                    
                    <Button type="submit" variant="contained">Create Project</Button>
                </form>
            </div>
        )
    }
}
export default NewProjectForm;