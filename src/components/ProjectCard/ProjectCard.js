import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
import Modal from '../UI/Modal/Modal';

import {styles} from '../hoc/material-ui/CardLayout';

import {toggleModal, toggleDeleteProject, resetModal} from '../../actions/modal';
import {setDeleteProject} from '../../actions/projects';

class ProjectCard extends Component {
    state = {
        showBack: false,
        showFront: true,
        isEditDialogueOpen: false,
        editProject: {
            id: parseInt(this.props.project.id),
            title: "",
            description: "",
            deadline: "",
        },
        projectToDelete: "",
    }
    handleCardClick = (e) => {
        e.preventDefault()
        this.setState({
            showBack: !this.state.showBack,
            showFront: !this.state.showFront,
        })
    }

    handleEditProjectLinkClick = (e) => {
        e.preventDefault()
        console.log("[ProjectCard.js - Clicked on Edit User Link")
        this.handleOpenEdit()
    }

    handleDeleteProjectLinkClick = (e) => {
        e.preventDefault()
        console.log("[PROJECTCard.js - YOU ARE DELETING THE PROJECT!")                
        this.props.setDeleteProject(this.props.project.id)
        this.props.toggleModal();
        this.props.toggleDeleteProject();
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
                ...this.state.editProject,
                title: "",
                description: "",
                deadline: "",
            },
            showBack: !this.state.showBack,
            showFront: !this.state.showFront,
        })
    }

    handleFormInputChange = event => {
        this.setState({
            editProject: {
                ...this.state.editProject,
                [event.target.name]: event.target.value
            },            
        })
    }

    handleSubmitEditForm = () => {
        if (Object.values({...this.state.editProject, id: ""}).join("") === "") {
            alert(`You did not edit any fields. To exit, click "Cancel"`)
        } else {
            const {editProject} = this.props
            editProject(this.state.editProject, this.props.currentUser.id)
            this.setState({
                showBack: false,
                showFront: true,
            })
        }        
    }

    handleDeleteProject = () => {
        this.props.deleteProject(this.props.projectToDelete);
        this.props.setDeleteProject("")
        this.props.toggleModal();
        this.props.toggleDeleteProject();
    }

    handleCloseDelete = () => {
        this.props.setDeleteProject("")
        this.props.toggleModal();
        this.props.toggleDeleteProject();
    }

    
    render() {
        const {project, classes} = this.props
        const {title, description, deadline} = project.attributes
        const {users, tasks} = project.relationships
        
        let modalToShow = null;

        if (this.props.showDeleteProject) {
            return (
                <Modal show={this.props.showModal} modalClosed={this.props.resetModal}>
                    <h3>All tasks associated with this project will be deleted.  Are you sure you want to delete the project?</h3>
                    <Button onClick={this.handleDeleteProject}>Yes</Button>
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
                    <IconButton aria-label="Settings" onClick={(e) => this.handleCardClick(e)} >
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={title}
                    subheader={`Deadline: ${deadline}`}
                />
                <div style={this.state.showFront ? null : {'display':'none'}}>
                    <Grow in={this.state.showFront}>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="p">Team Size: {users.data.length}</Typography>
                            <Typography gutterBottom variant="body1" component="p">Tasks o/s: {tasks.data.length}</Typography>
                        </CardContent>
                    </Grow>
                </div>
                <div style={this.state.showBack ? null : {'display':'none'}}>
                    <Grow in={this.state.showBack}>
                        <CardContent>
                            <CardActionArea onClick={(e)=>this.handleEditProjectLinkClick(e)}><Typography gutterBottom variant="h6" component="h2">Edit Details</Typography></CardActionArea>
                            <CardActionArea onClick={(e)=>this.handleDeleteProjectLinkClick(e)}><Typography gutterBottom variant="h6" component="h2">DELETE PROJECT</Typography></CardActionArea>
                        </CardContent>
                    </Grow>            
                </div>
                <Dialog open={this.state.isEditDialogueOpen} onClose={this.handleOpenEdit} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Edit Details for project: {title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Use this form to edit details for this project.
                        </DialogContentText>
                        <TextField
                            margin="dense"
                            id="title"
                            label="Title"
                            name="title"
                            value={this.state.editProject.title}
                            onChange={this.handleFormInputChange}
                            placeholder={title}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="description"
                            label="Description"
                            name="description"
                            value={this.state.editProject.description}
                            onChange={this.handleFormInputChange}
                            placeholder={description}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="deadline"
                            label="Deadline"
                            name="deadline"
                            helperText="YYYY-MM-DD"
                            value={this.state.editProject.deadline}
                            onChange={this.handleFormInputChange}
                            placeholder={deadline}
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

ProjectCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        showModal: state.modal.showModal,
        showDeleteProject: state.modal.showDeleteProject,
        currentUser: state.currentUser,
        selectedProject: state.selectedProjectId,
        projectToDelete: state.projects.deleteProjectId,
    }
}

export default withStyles(styles)(connect(mapStateToProps, {toggleModal, toggleDeleteProject, resetModal, setDeleteProject})(ProjectCard));