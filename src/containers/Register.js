import React, { Component } from 'react';
import RegisterWidget from '../components/RegisterWidget';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            user: {}
        }        
    }
    doRegister = () => {
        let user = { ...this.state.user };
        let address = [user.address1, user.address2, user.address3];
        console.log(address)
        user.address = address;
        let config = {
            method: "POST",           
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(this.state.user), 
        }
        fetch('http://localhost:3001/users', config)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                console.log(json)                
                this.props.showRegisterSuccess()
            })
            .catch((error) => {
                alert(error)
            })        
    }
    onInputChange = (event) => {        
        let name = event.target.id;
        let value = event.target.value;
        let user = {...this.state.user, [name]: value};
        console.log(this.state)
        this.setState({user});
    }
    render() {
        return(
            <div>
                <h1>Register</h1>
                <RegisterWidget doRegister={this.doRegister} onInputChange={ this.onInputChange } />
            </div>
            
        )
    }
}