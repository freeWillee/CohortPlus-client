import {combineReducers} from 'redux';

import users from './users';
import loginForm from './loginForm';
import currentUser from './currentUser';
import projects from './projects';
import myTasks from './myTasks';
import myProjects from './myProjects';
import signupForm from './signupForm';

export const rootReducer = combineReducers({
    users,
    currentUser,
    projects,
    loginForm,
    myTasks,
    myProjects,
    signupForm,
})