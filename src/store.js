import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'thunk';
import rootReducer from './reducers/index';

// For middleware

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store;