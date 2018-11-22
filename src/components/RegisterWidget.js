import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';


export default class RegisterWidget extends Component {
    render(){
        return(
            <div>
                <Typography variant="headline" gutterBottom>
                    Register
                </Typography>
                <TextField title='Username' onChange={this.props.usernameInput} /><br />
                <TextField title='Email' onChange={this.props.emailInput} /><br />
                <TextField title='Password' type='password' onChange={this.props.passwordInput} /><br />
                <Button title='zomg' onClick={this.props.doLogin}>Zomg</Button>
            </div>
        )
    }
}