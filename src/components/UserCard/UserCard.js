import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {styles} from '../hoc/material-ui/UserCard';


class UserCard extends Component {
    state = {
        showBack: false,
        showFront: true,
        isEditDialogueOpen: false,
        editUser: {
            id: parseInt(this.props.user.id),
            username: "",
            first_name: "",
            last_name: "",
            email: "",
            profile_url: "",
        },
    }
    handleCardClick = (e) => {
        e.preventDefault()
        this.setState({
            showBack: !this.state.showBack,
            showFront: !this.state.showFront
        })
    }

    handleEditUserLinkClick = (e) => {
        e.preventDefault()
        console.log("editing details")
        this.handleOpenEdit()
    }

    handleOpenEdit = () => {
        this.setState({
            isEditDialogueOpen: true,
        })
    }

    handleCloseEdit = () => {
        this.setState({
            isEditDialogueOpen: false,
            editUser: {
                ...this.state.editUser,
                username: "",
                first_name: "",
                last_name: "",
                email: "",
                profile_url: "",
            },
            showBack: !this.state.showBack,
            showFront: !this.state.showFront
        })
    }

    handleFormInputChange = event => {
        this.setState({
            editUser: {
                ...this.state.editUser,
                [event.target.name]: event.target.value
            },            
        })
    }

    handleSubmitEditForm = () => {
        const {editUser} = this.props
        console.log('SUBMITTED EDIT FORM - here is the final state:')
        console.log(this.state.editUser)
        editUser(this.state.editUser)
        this.handleCloseEdit()
    }

    render() {

        const {user, position, classes} = this.props
        const {username, first_name, last_name, email, profile_url} = user.attributes
        
        return (
            <Card className={classes.card}>
                <CardActionArea onClick={(e) => this.handleCardClick(e)} user_id={user.id}>
                    <CardMedia
                        className={classes.media}
                        image={profile_url}
                        title="dude"
                    />
                </CardActionArea> 
                <div style={this.state.showFront ? null : {'display':'none'}}>
                    <Grow in={this.state.showFront}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">{username}</Typography>
                            <Typography gutterBottom variant="h6" component="h2">{first_name} {last_name}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">{position}</Typography>
                            <a href={'mailto:' + user.attributes.email} style={{'textDecoration':'none'}}>
                                <Typography variant="subtitle2" color="textSecondary" component="p">{email}</Typography>
                            </a>
                        </CardContent>
                    </Grow>
                </div>
                <div style={this.state.showBack ? null : {'display':'none'}}>
                    <Grow in={this.state.showBack}>
                        <CardContent>
                            <CardActionArea onClick={(e)=>this.handleEditUserLinkClick(e)}><Typography gutterBottom variant="h6" component="h2">Edit Details</Typography></CardActionArea>
                        </CardContent>
                    </Grow>            
                </div>
                <Dialog open={this.state.isEditDialogueOpen} onClose={this.handleOpenEdit} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Edit Details for {first_name} {last_name}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Use this form to edit details for this team member.
                        </DialogContentText>
                        <TextField
                            margin="dense"
                            id="username"
                            label="Username"
                            name="username"
                            value={this.state.editUser.username}
                            onChange={this.handleFormInputChange}
                            placeholder={username}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="first_name"
                            label="First Name"
                            name="first_name"
                            value={this.state.editUser.first_name}
                            onChange={this.handleFormInputChange}
                            placeholder={first_name}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="last_name"
                            label="Last Name"
                            name="last_name"
                            value={this.state.editUser.last_name}
                            onChange={this.handleFormInputChange}
                            placeholder={last_name}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            name="email"
                            value={this.state.editUser.email}
                            onChange={this.handleFormInputChange}
                            placeholder={email}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="profile_url"
                            label="Profile Pic URL"
                            name="profile_url"
                            value={this.state.editUser.profile_url}
                            onChange={this.handleFormInputChange}
                            placeholder={profile_url}
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
        )
    }
}

UserCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserCard);