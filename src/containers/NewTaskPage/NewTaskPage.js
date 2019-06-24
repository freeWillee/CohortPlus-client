import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../../actions/index';
import NewTaskForm from '../../components/NewTaskCard/NewTaskCard';

class NewTaskPage extends Component {
    componentDidMount(){
        this.props.getProjects()
        this.props.getUsers()
    }

    render() {
        return (
            <NewTaskForm
                createTask={(formData, ownProps) => this.props.addNewTask(formData, ownProps)}
                users={this.props.users}
                projects={this.props.projects}
            />
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addNewTask: (formData) => dispatch(actionCreators.createNewTask(formData, ownProps)),
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