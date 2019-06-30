import React, {Component} from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';
import UsersIndex from './containers/UsersIndex/UsersIndex';
import ProjectsIndex from './containers/ProjectsIndex/ProjectsIndex';
import NewUserPage from './containers/NewUserPage/NewUserPage';
import NewTaskPage from './containers/NewTaskPage/NewTaskPage';
import Navbar from './components/Navigation/Navbar/Navbar';
import {
  getProjects, 
  getUsers, 
  getPositions, 
  getCurrentUser
} from './actions/index';
import ProjectPage from './containers/ProjectPage/ProjectPage'
import MyTasks from './containers/MyTasks/MyTasks'
import MainContainer from './containers/MainContainer/MainContainer';
import Login from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';
import Signup from './components/Signup/Signup';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getPositions()
    this.props.getUsers()
    this.props.getProjects()
  }

  render() {
    return (
      <div>
        <Route render={({history})=><Navbar history={history}/>}/>
        
        <MainContainer>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/my-dashboard" component={ProjectPage}/>
          <Route exact path="/my-dashboard" component={MyTasks}/>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/signup" render={
            () => (
              this.props.isLoggedIn ? (<Redirect to="/my-tasks"/>) : (<Signup/>)
              )}/>
          <Route exact path="/users" component={UsersIndex}/>
          <Route exact path="/users/new" component={NewUserPage}/>
          <Route exact path="/tasks/new" component={NewTaskPage}/>
          <Route exact path="/projects" component={ProjectsIndex}/>

          <Switch>
            {/* <Route exact path="/projects/1" render={props=> <ProjectPage {...props} projectId={"1"} />}/> */}
          </Switch>
        </MainContainer>
      </div>
    );
  }
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser,
    isLoggedIn: !!currentUser,
  }
}

export default withRouter(connect(mapStateToProps, {getUsers, getProjects, getPositions, getCurrentUser, getUsers, getProjects})(App));