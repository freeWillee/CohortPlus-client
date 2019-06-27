import React from 'react';
import {connect} from 'react-redux';
import {NavLink, Route} from 'react-router-dom';

import classes from './Navbar.module.css';
import Login from '../../Login/Login';
import Logout from '../../Logout/Logout';

const Navbar = ({currentUser}) => {
    return (
        <div className={classes.Bar}>
            {/* <NavLink
                to="/"
                exact
                className={classes.Link}
                activeStyle={{
                    background: 'darkblue'
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/users"
                exact
                className={classes.Link}
                activeStyle={{
                    background: 'darkblue'
                }}
            >
                Team Members
            </NavLink>
            <NavLink
                to="/users/new"
                exact
                className={classes.Link}
                activeStyle={{
                    background: 'darkblue'
                }}
            >
                Add Team Member
            </NavLink>
            <NavLink
                to="/tasks/new"
                exact
                className={classes.Link}
                activeStyle={{
                    background: 'darkblue'
                }}
            >
                Add a New Task
            </NavLink> */}
            <div className={classes.SessionNav}>
                {currentUser ? <Route component={Logout}/> : <Route component={Login}/>}
            </div>
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(Navbar);