import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../../actions/index';
import NewUser from '../../components/NewUser/NewUser';

class NewUserPage extends Component {
    componentDidMount(){
        this.props.getPositions()
    }

    render() {
        return (
            <NewUser 
                createUser={(formData, ownProps) => this.props.addNewUser(formData, ownProps)}
                positions={this.props.positions}
            />
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addNewUser: (formData) => dispatch(actionCreators.createNewUser(formData, ownProps)),
        getPositions: () => dispatch(actionCreators.getPositions())
    }
}

const mapStateToProps = state => {
    return {
        positions: state.users.positions
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserPage);