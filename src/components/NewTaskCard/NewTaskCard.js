import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import classes from './NewTaskCard.module.css';

// @material-ui library
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
// @material-ui -> for radio buttons
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


class NewTask extends Component {

    state = {
        title: "",
        content: "",
        status: "Not started",
        due_date: "",
        project: "",
        username: "",
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        
        if (this.state.project === "") {
            console.log('[MISSING PROJECT]', this.state)
            alert("Project Assignment Required")
        } else if (this.state.username === "") {
            console.log('[MISSING USERNAME]', this.state)
            alert("User Assignment Required")
        } else {
            console.log('[SUCCESS - CREATING TASK...]', this.state)
            const {createTask} = this.props
            createTask(this.state)
        }
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
        const {projects, users} = this.props
        let projectListToRender = []
        let userListToRender = []

        if (projects.length > 0) {
            projectListToRender = projects
        }
        if (users.length > 0) {
            userListToRender = users
        }

        const statuses = [
            "Not started",
            "In Progress",
            "Stalled",
            "Issue identified",
            "Completed"
        ]

        const radioStyle = {
            'display':'block',
            'textAlign':'center',
            'margin':'10px auto'
        }
        return (
            <div>
                <h1 className={classes.Heading}>New Task</h1>
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
                        id="content"                 
                        className={classes.TextField}
                        label="Notes"
                        name="content"
                        multiline
                        value={this.state.content}
                        onChange={this.handleChange}                        
                        margin="normal"
                    />
                    <TextField
                        id="status"
                        select
                        label="Status"
                        name="status"
                        value={this.state.status}
                        onChange={this.handleChange}
                        helperText="Select task status"
                        margin="normal"
                        variant="filled"
                    >
                        {statuses.map(status => (
                        <MenuItem key={status} value={status}>
                            {status}
                        </MenuItem>
                        ))}
                    </TextField>
                    <FormControl style={radioStyle} >
                        <FormLabel>Select Project to Assign Task To</FormLabel>
                        <RadioGroup
                            required
                            aria-label="Projects"
                            name="project"                        
                            value={this.state.project}
                            onChange={this.handleProjectChange}
                        >
                            {projectListToRender.map(project=>{
                                return <FormControlLabel 
                                            key={project.id}                     
                                            value={project.attributes.title} 
                                            control={<Radio />} 
                                            label={project.attributes.title} 
                                        />
                            })}
                        </RadioGroup>
                    </FormControl>
                    <FormControl style={radioStyle} >
                        <FormLabel>Select a User to Assign Task To</FormLabel>
                        <RadioGroup
                            aria-label="Users"
                            name="user"                        
                            value={this.state.user}
                            onChange={this.handleUserChange}
                        >
                            {userListToRender.map(user=>{
                                return <FormControlLabel 
                                            key={user.id} 
                                            value={user.attributes.username} 
                                            control={<Radio />} 
                                            label={user.attributes.username} 
                                        />
                            })}
                        </RadioGroup>
                    </FormControl>
                    <Button type="submit" variant="contained">Create Task</Button>
                </form>
            </div>
        )
    }
}

export default NewTask;