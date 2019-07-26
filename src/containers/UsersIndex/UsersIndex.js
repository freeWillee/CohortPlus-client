import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import * as actionCreators from '../../actions/index';
import User from '../../components/UserCard/UserCard';
import classes from './UsersIndex.module.css';
import {sortThisArray} from '../../helpers/sort';

class UsersIndex extends Component {
    state = {
        sortBy: "lastName",
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
    sortUsers = (usersArray, userClickSort, findUserCb) => {
        return usersArray.sort(function(a, b, sortBy=userClickSort, findUserCbFunc=user => findUserCb(user)) {
            let nameA
            let nameB

            switch(sortBy) {
                case "firstName":
                    nameA = a.attributes.first_name.toUpperCase(); // ignore upper and lowercase
                    nameB = b.attributes.first_name.toUpperCase(); // ignore upper and lowercase                    
                    break
                case "position":
                    nameA = findUserCbFunc(a).toUpperCase(); // ignore upper and lowercase
                    nameB = findUserCbFunc(b).toUpperCase(); // ignore upper and lowercase
                    break
                case "email":
                    nameA = a.attributes.email.toUpperCase(); // ignore upper and lowercase
                    nameB = b.attributes.email.toUpperCase(); // ignore upper and lowercase
                    break
                default:  // sort by last name
                    nameA = a.attributes.last_name.toUpperCase(); // ignore upper and lowercase
                    nameB = b.attributes.last_name.toUpperCase(); // ignore upper and lowercase
                    break
            }
            
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

    handleToggleSort = (e) => {
        e.preventDefault()
        console.log("i was clicked")
    }

    render() {
        let usersToRender
        if (this.props.directory.length > 0) {            
            let usersToMap = sortThisArray(this.props.directory, this.state.sortBy, this.findUserPosition)
            
            usersToRender = usersToMap.map(user=>{
                const userPosition = this.findUserPosition(user)
                return <User
                        key={user.id} 
                        user={user}
                        position={userPosition}
                        editUser={this.props.editUser}
                        deleteUser={this.props.deleteUser}
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
        editUser: (formData) => dispatch(actionCreators.editUser(formData, ownProps)),
        deleteUser: (formData) => dispatch(actionCreators.deleteUser(formData, ownProps))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersIndex));