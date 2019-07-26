import React, {Component} from 'react'
// import classes from './TaskCard.module.css';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardHeader from '@material-ui/core/CardHeader';

import {styles} from '../hoc/material-ui/CardLayout';
import Modal from '../UI/Modal/Modal';
import {toggleModal, toggleDeleteTask, resetModal} from '../../actions/modal';
import {editTask, deleteTask, setTaskToDelete, resetTaskToDelete} from '../../actions/tasks';
import { getMyProjects } from '../../actions';

class TaskCard extends Component  {
    state = {
        showBack: false,
        showFront: true,
        isEditDialogueOpen: false,
        editTask: {
            id: parseInt(this.props.task.id),
            title: "",
            content: "",
            status: "",
            due_date: "",
        },
    }

    handleCardClick = (e) => {
        e.preventDefault()
        this.setState({
            showBack: !this.state.showBack,
            showFront: !this.state.showFront
        })
    }

    handleEditTaskLinkClick = (e) => {
        e.preventDefault()
        console.log("[TaskCard.js - Clicked on Edit Task Link")
        this.handleOpenEdit()
    }

    handleDeleteTaskLinkClick = (e) => {
        e.preventDefault()
        console.log("[TASKCard.js - YOU ARE DELETING THE TASK!")        
        this.props.setTaskToDelete(this.props.task.id)
        this.props.toggleModal();
        this.props.toggleDeleteTask();
    }

    handleOpenEdit = () => {
        this.setState({
            isEditDialogueOpen: true,
        })
    }

    handleCloseEdit = () => {
        this.setState({
            isEditDialogueOpen: false,
            editProject: {
                ...this.state.editTask,
                title: "",
                content: "",
                status: "",
                due_date: "",
            },
            showBack: !this.state.showBack,
            showFront: !this.state.showFront
        })
    }

    handleFormInputChange = event => {
        this.setState({
            editTask: {
                ...this.state.editTask,
                [event.target.name]: event.target.value
            },            
        })
    }

    handleSubmitEditForm = () => {
        if (Object.values({...this.state.editTask, id: ""}).join("") === "") {
            alert(`You did not edit any fields. To exit, click "Cancel"`)
        } else {
            const {editTask} = this.props
            console.log("EDITING THE TASK")
            editTask(this.state.editTask, this.props.currentUserId)
            getMyProjects(this.props.currentUserId)
            this.handleCloseEdit()
        }        
    }

    handleDeleteTask = () => {
        this.props.deleteTask(this.props.taskToDelete, this.props.currentUserId);
        this.props.resetTaskToDelete()
        this.props.resetModal();
        this.setState({            
            showBack: !this.state.showBack,
            showFront: !this.state.showFront
        })
    }
    
    handleCloseDelete = () => {
        this.props.resetTaskToDelete()
        this.props.resetModal();
        this.setState({            
            showBack: !this.state.showBack,
            showFront: !this.state.showFront
        })
    }

    render() {
        const {title, content, status, due_date} = this.props.task.attributes
        let modalToShow = null;

        const {task, classes} = this.props

        if (this.props.showDeleteTask) {
            return (
                <Modal show={this.props.showModal} modalClosed={this.props.resetModal}>
                    <h3>This task will be deleted.  Are you sure you want to continue?</h3>
                    <Button onClick={this.handleDeleteTask}>Yes</Button>
                    <Button onClick={this.handleCloseDelete}>No</Button>
                </Modal>
            )
        }
        
        return (
            <>
            {modalToShow}
            <Card className={classes.card}>
                <CardHeader
                    action={
                    <IconButton aria-label="Settings" onClick={(e) => this.handleCardClick(e)} task_id={task.id}>
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={title}
                    subheader={`Due date: ${due_date}`}
                />
                <div style={this.state.showFront ? null : {'display':'none'}}>
                    <Grow in={this.state.showFront}>
                        <CardContent>                            
                            <Typography gutterBottom variant="body1" component="p">Content: {content}</Typography>
                            <Typography gutterBottom variant="body1" component="p">Status: {status}</Typography>
                        </CardContent>
                    </Grow>
                </div>
                <div style={this.state.showBack ? null : {'display':'none'}}>
                    <Grow in={this.state.showBack}>
                        <CardContent>
                            <CardActionArea onClick={(e)=>this.handleEditTaskLinkClick(e)}><Typography gutterBottom variant="h6" component="h2">Edit Details</Typography></CardActionArea>
                            <CardActionArea onClick={(e)=>this.handleDeleteTaskLinkClick(e)}><Typography gutterBottom variant="h6" component="h2">DELETE TASK</Typography></CardActionArea>
                        </CardContent>
                    </Grow>            
                </div>
                <Dialog open={this.state.isEditDialogueOpen} onClose={this.handleOpenEdit} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Edit Details for Task: {title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Use this form to edit details for this task.
                        </DialogContentText>
                        <TextField
                            margin="dense"
                            id="title"
                            label="Title"
                            name="title"
                            value={this.state.editTask.title}
                            onChange={this.handleFormInputChange}
                            placeholder={title}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="content"
                            label="Content"
                            name="content"
                            value={this.state.editTask.content}
                            onChange={this.handleFormInputChange}
                            placeholder={content}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="due_date"
                            label="Due date"
                            name="due_date"
                            helperText="YYYY-MM-DD"
                            value={this.state.editTask.due_date}
                            onChange={this.handleFormInputChange}
                            placeholder={due_date}
                            fullWidth
                        />                     
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseEdit} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmitEditForm} color="primary">
                            Edit
                        </Button>
                    </DialogActions>
                </Dialog>
            </Card>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        showModal: state.modal.showModal,
        showDeleteTask: state.modal.showDeleteTask,
        currentUserId: state.currentUser.id,
        taskToDelete: state.tasks.deleteTaskId,
    }
}

export default withStyles(styles)(connect(mapStateToProps, {toggleModal, toggleDeleteTask, resetModal, editTask, setTaskToDelete, deleteTask, resetTaskToDelete})(TaskCard));