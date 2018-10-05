import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


export default class LoginWidget extends Component {
    render(){
        return(
            <div>
                LoginWidget<br/>
                <TextField title='Username' onChange={this.props.usernameInput} />
                <TextField title='Password' type='password' onChange={this.props.passwordInput} />
            </div>
        )
    }
}