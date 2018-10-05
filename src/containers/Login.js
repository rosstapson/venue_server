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
    render() {
        return(
            <div>
                <h1>Login container</h1>
                <LoginWidget />
            </div>
        )
    }
}