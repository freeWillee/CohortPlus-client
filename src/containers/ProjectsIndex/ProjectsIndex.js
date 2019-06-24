import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import * as actionCreators from '../../actions/index';
import classes from './ProjectsIndex.module.css';

class ProjectsIndex extends Component {
    componentDidMount(){
        this.props.getProjects()
    }

    render() {
        let projects
        if (this.props.projects.length > 0) {
            projects = this.props.projects.map(project=>{            
                const {title, deadline} = project.attributes
                let timing = deadline
                if (timing === null) {
                    timing = "No deadline set"
                }
                return <li key={project.id}>{title} || {timing}</li>
            })
        }

        return (
            <div>
                <h1 className={classes.Header}>Project List</h1>
                <ul className={classes.ProjectList}>
                    {projects}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects.listing
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProjects: () => dispatch(actionCreators.getProjects())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectsIndex));