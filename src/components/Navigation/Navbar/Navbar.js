import React from 'react';
import {connect} from 'react-redux';
import {NavLink, Route} from 'react-router-dom';

import classes from './Navbar.module.css';
import Login from '../../Login/Login';
import Logout from '../../Logout/Logout';
import NewUserForm from '../../NewUserForm/NewUserForm';

const Navbar = ({currentUser, isLoggedIn, history}) => {
    const loggedInNav = (
        <div>            
            <NavLink
                to="/"
                exact
                className={classes.Link}
                activeStyle={{
                    background: 'purple',
                    color: 'white',
                }}
            >Home</NavLink>
            <NavLink
                to="/my-dashboard"
                exact
                className={classes.Link}
                activeStyle={{
                    background: 'purple',
                    color: 'white',
                }}
            >My Dashboard</NavLink>
            <NavLink
                to="/users"
                exact
                className={classes.Link}
                activeStyle={{
                    background: 'purple',
                    color: 'white',
                }}
            >Team Members</NavLink>
            <NavLink
                to="/users/new"
                exact
                className={classes.Link}
                activeStyle={{
                    background: 'purple',
                    color: 'white',
                }}
            >Add Team Member</NavLink>
            <NavLink
                to="/tasks/new"
                exact
                className={classes.Link}
                activeStyle={{
                    background: 'purple',
                    color: 'white',
                }}
            >Add a New Task</NavLink>
            <Logout history={history}/>
        </div>
    )

    const handleClick = (event) => {
        event.preventDefault()
        history.push(`/${event.target.name}`)
    }

    const loggedOutNav = (
        <div className={classes.Links}>
            <button onClick={handleClick} name="signup">Signup</button>
            <button onClick={handleClick} name="login">Login</button>
        </div>
    )
    return (
        <div className={classes.Bar}>
            {isLoggedIn ? <p className={classes.Username}>Welcome, {currentUser.attributes.first_name}</p> : null}
            {isLoggedIn ? loggedInNav : loggedOutNav}
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        isLoggedIn: !!currentUser,
        currentUser
    }
}

export default connect(mapStateToProps)(Navbar);