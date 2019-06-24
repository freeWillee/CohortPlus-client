import {combineReducers} from 'redux';

import users from './users';
import projects from './projects';

export const rootReducer = combineReducers({
    users,
    projects
})