import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={classes.Bar}>
            <NavLink
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
            </NavLink>
        </div>
    )
}

export default Navbar;