import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../../actions/index';
import NewTaskForm from '../../components/NewTaskCard/NewTaskCard';

class NewTaskPage extends Component {
    render() {
        return (
            <NewTaskForm
                createTask={this.props.addNewTask}
                users={this.props.users}
                projects={this.props.projects}
            />
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addNewTask: (formData, currentUserId) => dispatch(actionCreators.createNewTask(formData, ownProps, currentUserId)),
        getProjects: () => dispatch(actionCreators.getProjects()),
        getUsers: () => dispatch(actionCreators.getUsers())
    }
}

const mapStateToProps = state => {
    return {
        users: state.users.directory,
        projects: state.projects.listing
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskPage);