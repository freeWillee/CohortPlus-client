import React from 'react';
import { connect } from 'react-redux';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/styles';
import {styles} from '../../components/hoc/material-ui/CardLayout';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

const MyProjects = ({projects, classes}) => {
    const projectCards = projects.map(project =>         
        <Card key={project.id} className={classes.card}>
            <CardActionArea onClick={console.log("i was clicked")}>
                <CardHeader
                    title={project.attributes.title}
                    subheader={`Deadline: ${project.attributes.deadline}`}
                />
                <Typography variant="subtitle2" color="textSecondary" component="p">Team Members: {project.relationships.users.data.length}</Typography>
                <Typography variant="subtitle2" color="textSecondary" comjhdponent="p">Task Count: {project.relationships.tasks.data.length}</Typography>
            </CardActionArea>
        </Card>
        )
    return (
        projectCards.length > 0 ? projectCards : null
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.myProjects,
        currentUser: state.currentUser,
    }
}

export default withStyles(styles)(connect(mapStateToProps)(MyProjects))