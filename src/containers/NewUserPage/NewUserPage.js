import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../../actions/index';
import NewUserForm from '../../components/NewUserForm/NewUserForm';

class NewUserPage extends Component {
    componentDidMount(){
    }
    
    render() {
        let showForm

        if(this.props.positions.length > 0) { 
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
    }
}

const mapStateToProps = state => {
    return {
        positions: state.users.positions,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserPage);