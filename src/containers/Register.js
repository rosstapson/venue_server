import React, { Component, setGlobal } from 'reactn';
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
        user.address = address;
        console.log(user);
        let config = {
            method: "POST",           
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(user), 
        }
        fetch('http://localhost:3001/users', config)
            .then((response) => {                
                response.json()            
                    .then((json) => {
                        console.log(json)
                        if (!response.ok) {
                            alert(json.message);
                            return;
                        }
                        else {
                            this.props.showRegisterSuccess()
                        }                
                    })
                    .catch((error) => {                
                        alert(error)
                    })
                })
    }
    onInputChange = (event) => {        
        let name = event.target.id;
        let value = event.target.value;
        let user = {...this.state.user, [name]: value};
        //console.log(this.state)
        this.setState({user});
    }
    goToLogin = () => {
        setGlobal({
            showLogin: true,
            showRegister: false,
        })
    }
    render() {
        return(
            <div>
                <h1>Register</h1>
                <RegisterWidget 
                    doRegister={this.doRegister} 
                    onInputChange={ this.onInputChange } 
                    goToLogin={this.goToLogin}
                />
            </div>
            
        )
    }
}