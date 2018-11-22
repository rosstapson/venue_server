import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'


export default class LoginWidget extends Component {
    render(){
        return(
            <div>               
                <TextField title='Username' onChange={this.props.usernameInput} /><br />
                <TextField title='Password' type='password' onChange={this.props.passwordInput} /><br />
                <Button title='zomg' onClick={this.props.doLogin}>Zomg</Button>
            </div>
        )
    }
}