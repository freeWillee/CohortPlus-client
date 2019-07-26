import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import * as actionCreators from '../../actions/index';
import classes from './ProjectsIndex.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import {sortThisArray} from '../../helpers/sort';

class ProjectsIndex extends Component {
    
    state = {
        sortBy: "title",
    }

    render() {
        let projectsToRender

        if (this.props.projects.length > 0) {
            let projectsToMap = sortThisArray(this.props.projects, this.state.sortBy)
            
            projectsToRender = projectsToMap.map(project=>{           
                return <ProjectCard 
                    key={project.id}
                    project={project} 
                    editProject={(formData, ownProps, currentUserId) => this.props.editProject(formData, ownProps, currentUserId)}
                    deleteProject={this.props.deleteProject}
                />
            })
        }

        return (
            <div>
                <h1 className={classes.Header}>Project Directory</h1>
                <div className={classes.Project}>
                    {projectsToRender}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects.listing
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getProjects: () => dispatch(actionCreators.getProjects()),
        editProject: (formData, currentUserId) => dispatch(actionCreators.editProject(formData, ownProps, currentUserId)),
        deleteProject: (formData) => dispatch(actionCreators.deleteProject(formData, ownProps))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectsIndex));