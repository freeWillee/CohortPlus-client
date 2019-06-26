import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import classes from './ProjectPage.module.css';

class ProjectPage extends Component {

    render() {
        const {projectId} = this.props
        debugger
        return (
            <div>
                <div className={classes.Header}>PROJECT TITLE - Project # {projectId}</div>
                <div className={classes.Content}>PROJECT PIE CHART</div>
                <div className={classes.Content}>TASK LIST COMPONENTS MAPPED</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listing: state.projects.listing,
        users: state.users.directory,
        positions: state.users.positions
    }
}

export default withRouter(connect(mapStateToProps)(ProjectPage));