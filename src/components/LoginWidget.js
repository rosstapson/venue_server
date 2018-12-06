import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class LoginWidget extends Component {
    render(){
        return(
            <div>               
                <TextField title='Username' placeholder='Username' onChange={this.props.usernameInput} /><br />
                <TextField title='Password' placeholder='Password' type='password' onChange={this.props.passwordInput} /><br />
                <Button title='zomg' onClick={this.props.doLogin}>Log In</Button>
                <Button title='Not registered yet?' onClick={this.props.goToRegister}>Not registered yet?</Button>
            </div>
        )
    }
}