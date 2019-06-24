import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';

import './App.css';
import UsersIndex from './containers/UsersIndex/UsersIndex';
import ProjectsIndex from './containers/ProjectsIndex/ProjectsIndex';
import Login from './components/Login/Login';
import NewUserPage from './containers/NewUserPage/NewUserPage';
import NewTaskPage from './containers/NewTaskPage/NewTaskPage';
import Navbar from './components/Navigation/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/users" component={UsersIndex}/>
          <Route exact path="/users/new" component={NewUserPage}/>
          <Route exact path="/tasks/new" component={NewTaskPage}/>
          <Route exact path="/projects" component={ProjectsIndex}/>
          <Route component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);