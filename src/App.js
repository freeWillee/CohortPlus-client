import React, {Component} from 'react';
import {Route, withRouter, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';
import UsersIndex from './containers/UsersIndex/UsersIndex';
import ProjectsIndex from './containers/ProjectsIndex/ProjectsIndex';
import NewUserPage from './containers/NewUserPage/NewUserPage';
import NewTaskPage from './containers/NewTaskPage/NewTaskPage';
import NewProjectPage from './containers/NewProjectPage/NewProjectPage';
import Navbar from './components/Navigation/Navbar/Navbar';
import {
  getProjects, 
  getUsers, 
  getPositions, 
  getCurrentUser,
  getTasks
} from './actions/index';
import MyDashboard from './containers/MyDashboard/MyDashboard'
import MainContainer from './containers/MainContainer/MainContainer';
import Homepage from './components/Homepage/Homepage';

class App extends Component {
  componentDidMount() {
    this.props.getPositions()
    this.props.getUsers()
    this.props.getProjects()
    this.props.getTasks()
    this.props.getCurrentUser()
  }

  render() {
    if (this.props.isLoggedIn) {
      return (
      <div>
        <Route render={({history})=><Navbar history={history}/>}/>
        <MainContainer>
          <Switch>
            <Route exact path="/my-dashboard" component={MyDashboard}/>
            <Route exact path="/users" component={UsersIndex}/>
            <Route exact path="/users/new" component={NewUserPage}/>
            <Route exact path="/tasks/new" component={NewTaskPage}/>
            <Route exact path="/projects/new" component={NewProjectPage}/>
            <Route exact path="/projects" component={ProjectsIndex}/>
            <Route path="/" render={({history}) => this.props.isLoggedIn ? <MyDashboard /> : <Homepage history={history}/>}/>
          </Switch>
        </MainContainer>
      </div>
      )
    } else {      
      return (
        <MainContainer>
          <Route path="/" render={({history}) => <Homepage history={history}/>}/>
        </MainContainer>
      )
    }
  }
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser,
    isLoggedIn: !!currentUser,
  }
}

export default withRouter(connect(mapStateToProps, {getUsers, getProjects, getPositions, getCurrentUser, getTasks})(App));