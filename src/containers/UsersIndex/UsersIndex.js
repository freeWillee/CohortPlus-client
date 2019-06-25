import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import * as actionCreators from '../../actions/index';
import User from '../../components/UserCard/UserCard';
import classes from './UsersIndex.module.css';

class UsersIndex extends Component {
    componentDidMount(){
        console.log('[UsersIndex - COMPONENT DID MOUNT]: ', )
        this.props.getUsers()
        this.props.fetchPositions()
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UsersIndex - shouldComponentUpdate]: ', 'nextProps: ', nextProps, 'nextState: ', nextState )
        return true
    }
    
    // find a user's position
    findUserPosition = user => {
        const positionId = user.relationships.position.data.id
        if (this.props.positions.length > 0) {
            return this.props.positions.filter(position=>position.id === positionId)[0]
            .attributes
            .title
        }        
    }

    // my sort function
    sortUsers = usersArray => {
        return usersArray.sort(function(a, b) {
            let nameA = a.attributes.last_name.toUpperCase(); // ignore upper and lowercase
            let nameB = b.attributes.last_name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }              
            // names must be equal
            return 0;
          });
    }

    render() {
        let usersToRender
        if (this.props.directory.length > 0) {
            
            // DEFAULT SORT BY LAST NAME --> TO BUILD OUT FUNCTIONALITY TO SORT BY TITLE
            let usersToMap = this.sortUsers(this.props.directory)
            
            usersToRender = usersToMap.map(user=>{
                const userPosition = this.findUserPosition(user)
                return <User 
                    key={user.id} 
                    user={user}
                    position={userPosition}
                    editUser={(formData, ownProps) => this.props.editUser(formData, ownProps)}
                />
            })
        }   

        return (
            <div>
                <h1 className={classes.Header}>Team Directory</h1>
                <div className={classes.User}>
                    {usersToRender}  
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        directory: state.users.directory,
        positions: state.users.positions
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getUsers: () => dispatch(actionCreators.getUsers()),
        editUser: (formData) => dispatch(actionCreators.editUser(formData, ownProps)),
        fetchPositions: () => dispatch(actionCreators.getPositions())       
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersIndex));