import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

export default class RegisterWidget extends Component {
    render(){
        return(
            <div>                
                <TextField id='username' title='Username' placeholder='Username' onChange={this.props.onInputChange} /><br />
                <TextField id='email' title='Email' placeholder='Email' onChange={this.props.onInputChange} /><br />
                <TextField 
                    id='password' 
                    title='Password' 
                    placeholder='Password' 
                    type='password' 
                    onChange={this.props.onPasswordChange}
                    error={!this.props.isValid}
                />
                {!this.props.isValid &&
                    <b>x</b>
                }
                <br />
                <TextField 
                    id='confirmPassword' 
                    title='Confirm Password' 
                    placeholder='Confirm Password' 
                    type='password' 
                    onChange={this.props.onConfirmChange}
                    error={!this.props.isMatching}
                />
                {!this.props.isMatching &&
                    <b>x</b>
                }
                <br />
                <TextField id='address1' title='Address Line 1' placeholder='Address' onChange={this.props.onInputChange} /><br />
                <TextField id='address2' title='Address Line 2' onChange={this.props.onInputChange} /><br />
                <TextField id='address3' title='Address Line 3' onChange={this.props.onInputChange} /><br />
                <Button title='zomg' 
                    onClick={this.props.doRegister}
                    disabled={!this.props.isMatching || !this.props.isValid}
                >
                Zomg
                </Button>
                <Button title='Already registered?' onClick={this.props.goToLogin}>Already Registered?</Button>
            </div>
        )
    }
}