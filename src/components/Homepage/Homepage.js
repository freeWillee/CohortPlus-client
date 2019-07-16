import React from 'react';
import {Route} from 'react-router-dom';

import classes from './Homepage.module.css';
import Modal from '../UI/Modal/Modal';
import { connect } from 'react-redux';
import Aux from '../hoc/Aux/Aux';
import {toggleModal, toggleShowLogin, toggleShowSignup, resetModal} from '../../actions/modal';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';



const Homepage = (props, {history}) => {
    let modalToShow = null;

    const handleClick = (event) => {
        event.preventDefault()
        console.log(event.target.name)
        if (event.target.name === 'signup') {            
            props.toggleModal();
            props.toggleShowSignup();
        } else if (event.target.name === 'login') {
            props.toggleModal();
            props.toggleShowLogin();
        }
        console.log(modalToShow);
    }

    const resetModal = () => {
        props.resetModal()
    }

    if (props.showLogin) {
        modalToShow = <Login />
    } else if (props.showSignup) {
        modalToShow = <Signup history={history}/>
    }

    return (
        <Aux>
        <Modal show={props.showModal} modalClosed={resetModal}>
            {modalToShow}
        </Modal>
        <div className={classes.Homepage}>
            <div className={classes.main}>
                <div className={classes.container}>
                    <h1>Welcome to Cohort Plus</h1>
                    <h2>The task management tool that focuses on your team.</h2>
                    <button className={classes.btn} onClick={handleClick} name="signup">Signup</button>
                    <button className={classes.btn} onClick={handleClick} name="login">Login</button>
                </div>
            </div>        

            <div className={classes.footer}>
                <div className={classes.footerSection}>
                    <div className={classes.footerCategory}>
                        <h3>Company</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Terms</li>
                            <li>Help</li>
                        </ul>
                    </div>
                    
                    <div className={classes.footerCategory}>
                        <h3>News</h3>
                        <ul>
                            <li>Blog</li>
                            <li>Twitter</li>
                            <li>YouTube</li>
                            <li>Google+</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Aux>
)
}

const mapStateToProps = state => {
    return {
        showModal: state.modal.showModal,
        showSignup: state.modal.showSignup,
        showLogin: state.modal.showLogin,
    }
}

export default connect(mapStateToProps,{toggleModal, toggleShowSignup, toggleShowLogin, resetModal})(Homepage)