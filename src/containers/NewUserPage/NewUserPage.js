import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../../actions/index';
import NewUserForm from '../../components/NewUserForm/NewUserForm';

class NewUserPage extends Component {
    componentDidMount(){
        this.props.getPositions()
        this.props.getUsers()
    }
    
    render() {
        let showForm = "Loading"

        if(this.props.positions.length > 0 && this.props.users.length > 0) { 
            showForm = <NewUserForm 
                submitFormAction={(formData, ownProps) => this.props.addNewUser(formData, ownProps)}
                positions={this.props.positions}
                formTitle="New User"
            />
        }
        return (
            <div>
                {showForm}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addNewUser: (formData) => dispatch(actionCreators.createNewUser(formData, ownProps)),
        getPositions: () => dispatch(actionCreators.getPositions()),
        getUsers: () => dispatch(actionCreators.getUsers())
    }
}

const mapStateToProps = state => {
    return {
        positions: state.users.positions,
        users: state.users.directory,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserPage);