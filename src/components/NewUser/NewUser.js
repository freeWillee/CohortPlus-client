import React, {Component} from 'react';

class NewUser extends Component {

    state = {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: "",
        profile_url:"https://api.adorable.io/avatars/285/sebby.png",
        position: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        const {createUser} = this.props
        event.preventDefault();
        createUser(this.state)
    }

    handleSelectionChange = event => {
        this.setState({
            position: event.target.value
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.positions !== prevProps.positions) {
            this.setState({
                position: this.props.positions[0].attributes.title
            })
        }
    }

    render() {        
        const {positions} = this.props
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>Username:</label>
                        <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>
                    </p>
                    <p>
                        <label>Password:</label>
                        <input type="text" name="password" onChange={this.handleChange} value={this.state.password}/>
                    </p>
                    <p>
                        <label>Profile Picture URL:</label>
                        <input type="text" name="profile_url" onChange={this.handleChange} placeholder="https://api.adorable.io/avatars/285/sebby.png" value={this.state.profile_url}/>
                    </p>
                    <p>
                        <label>First Name:</label>
                        <input type="text" name="first_name" onChange={this.handleChange} value={this.state.first_name}/>
                    </p>
                    <p>
                        <label>Last Name:</label>
                        <input type="text" name="last_name" onChange={this.handleChange} value={this.state.last_name}/>
                    </p>
                    <p>
                        <label>Email:</label>
                        <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
                    </p>
                    <p>
                        <label>Select Position:</label>
                        <select 
                            value={this.state.position} 
                            onChange={this.handleSelectionChange}>
                            {positions.map(option => {
                                return <option 
                                            value={option.attributes.title} 
                                            key={option.id} 
                                        >{option.attributes.title}</option>
                                })
                            }
                        </select>
                    </p>
                    <input type="submit" value="Create User" />
                </form>
            </div>
        )
    }
}

export default NewUser;