import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../../actions/index';
import NewProjectForm from '../../components/NewProjectForm/NewProjectForm';

class NewProjectPage extends Component {
    render() {
        return (
            <NewProjectForm
                createProject={(formData, ownProps) => this.props.createNewProject(formData, ownProps)}
            />
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createNewProject: (formData) => dispatch(actionCreators.createNewProject(formData, ownProps)),
    }
}

export default connect(null, mapDispatchToProps)(NewProjectPage);