import React, { Component, setGlobal } from 'reactn';
import RegisterWidget from '../components/RegisterWidget';
import passwordValidator from 'password-validator';

const schema = new passwordValidator();
schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits()                                 // Must have digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            user: {},
            errors: [],
            isValid: false,
            isMatching:false,
            password: '',
            confirm: ''
        }        
    }
    doRegister = () => {
        let user = { ...this.state.user };
        let address = [user.address1, user.address2, user.address3];       
        user.address = address;
        user.password = this.state.password;
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
        
        this.setState({
            user: user,
        });
    }
    onPasswordChange = (event) => {
        let errors = schema.validate(event.target.value, {list: true});
        this.setState({
          errors: errors,
          isValid: !errors.length,
          password: event.target.value,
          isMatching: event.target.value === this.state.confirm
        })
      }
      onConfirmChange = (event) => {
        this.setState({
          isMatching: event.target.value === this.state.password,
          confirm: event.target.value
        })
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
                    onConfirmChange={this.onConfirmChange}
                    onPasswordChange={this.onPasswordChange}
                    isMatching={this.state.isMatching}
                    isValid={this.state.isValid}
                    
                />
            </div>
            
        )
    }
}