import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCurrentUser} from './actions/currentUser'

import './App.css';
import UsersIndex from './containers/UsersIndex/UsersIndex';
import ProjectsIndex from './containers/ProjectsIndex/ProjectsIndex';

import NewUserPage from './containers/NewUserPage/NewUserPage';
import NewTaskPage from './containers/NewTaskPage/NewTaskPage';
import Navbar from './components/Navigation/Navbar/Navbar';
import {getProjects, getUsers, getPositions} from './actions/index';
import ProjectPage from './containers/ProjectPage/ProjectPage'

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          {/* <Route exact path="/users" component={UsersIndex}/>
          <Route exact path="/users/new" component={NewUserPage}/>
          <Route exact path="/tasks/new" component={NewTaskPage}/>
          <Route exact path="/projects" component={ProjectsIndex}/>
          <Route exact path="/projects/1" render={props=> <ProjectPage {...props} projectId={"1"} />}/> */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

export default withRouter(connect(mapStateToProps, {getUsers, getProjects, getPositions, getCurrentUser})(App));