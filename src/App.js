import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';

import './App.css';
import UsersIndex from './containers/UsersIndex/UsersIndex';
import Login from './components/Login/Login';
import NewUserPage from './containers/NewUserPage/NewUserPage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/users" component={UsersIndex}/>
          <Route exact path="/users/new" component={NewUserPage}/>
          <Route component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);