import {combineReducers} from 'redux';

import users from './users';
import projects from './projects';
import server from './server';

export const rootReducer = combineReducers({
    users,
    projects,
    server
})