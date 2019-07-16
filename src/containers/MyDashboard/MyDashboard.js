import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import classes from './MyDashboard.module.css';
import MyTasks from '../MyTasks/MyTasks';
import MyProjects from '../MyProjects/MyProjects';
import {setFilter} from '../../actions/myTasks';

class myDashboard extends Component {

    handleProjectSelected = (event) => {
        event.preventDefault()
        const selectedProject = event.currentTarget.attributes.projectid.value
        console.log("SELECTED_PROJECT:", selectedProject)
        this.props.setFilter(selectedProject)
    }

    render() {
        return (
            <div className={classes.Container}>
                <div className={classes.ProjectsSidebar}>
                    <MyProjects selectedProject={event=> {this.handleProjectSelected(event)}}/>
                </div>
                <div className={classes.ProjectSection}>
                    <MyTasks />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        positions: state.users.positions,
        currentUser: state.currentUser,
        tasks: state.tasks,
        myTasks: state.myTasks,
    }
}

export default withRouter(connect(mapStateToProps,{setFilter})(myDashboard));