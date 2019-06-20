import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import * as actionCreators from '../../actions/index';
import User from '../../components/UserCard/UserCard';
import classes from './UsersIndex.module.css';

class UsersIndex extends Component {
    componentDidMount(){
        this.props.getUsers()
        this.props.fetchPositions()
    }
    
    findUserPosition = user => {
        const positionId = user.relationships.position.data.id
        return this.props.positions.filter(position=>position.id === positionId)[0]
            .attributes
            .title
    }

    render() {
        let users

        if (this.props.directory.length > 0) {
            users = this.props.directory.map(user=>{
                const userPosition = this.findUserPosition(user)
                return <User 
                    key={user.id} 
                    user={user}
                    position={userPosition}
                />
            })
        }
        
        console.log('[IN USERS COMPONENT]:', this.props.directory)    
        console.log('[ARRAY OF USERS TO PASS]:', users)    

        return (
            <div>
                <h1 className={classes.Header}>Team Directory</h1>
                <div className={classes.User}>
                    {users}  
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

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(actionCreators.getUsers()),
        fetchPositions: () => dispatch(actionCreators.getPositions())       
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersIndex));