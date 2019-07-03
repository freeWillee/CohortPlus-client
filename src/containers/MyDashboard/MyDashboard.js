import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import classes from './MyDashboard.module.css';
import MyTasks from '../MyTasks/MyTasks';
import MyProjects from '../MyProjects/MyProjects';

class myDashboard extends Component {
    render() {
        return (
            <div className={classes.Container}>
                <div className={classes.ProjectsSidebar}>
                    <MyProjects />
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
    }
}

export default withRouter(connect(mapStateToProps)(myDashboard));