import React, {Component} from 'react';

class Login extends Component {    
    
    state = {
        username: "",
        password: ""
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const {handleSubmit} = this.props

        return (
            <div>
                <h1>Login Page</h1>
                <form onSubmit={() => handleSubmit(this.state)}>
                    <label>Username: </label>
                    <input type="text" onChange={this.handleOnChange} name="username" value={this.state.username} />
                    <label>Password: </label>
                    <input type="text" onChange={this.handleOnChange} name="password" value={this.state.password} />
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }    
}

export default Login;