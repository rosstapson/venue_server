import React, { Component } from 'react';
import LoginWidget from '../components/LoginWidget';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    doLogin = () => {
        let user = {
            username: this.state.username, 
            password: this.state.password
        }
        this.props.setLoggedIn(user);
    }
    usernameInput = (event) => {
        this.setState({username: event.target.value})
    }
    passwordInput = (event) => {
        this.setState({password: event.target.value})        
    }
    render() {
        return(
            <div>
                <h1>Login</h1>
                <LoginWidget 
                    doLogin={this.doLogin}
                    usernameInput={this.usernameInput}
                    passwordInput={this.passwordInput}
                />
            </div>
        )
    }
}