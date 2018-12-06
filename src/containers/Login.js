import React, { Component, setGlobal } from 'reactn';
import LoginWidget from '../components/LoginWidget';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    goToRegister = () => {
        setGlobal({
            showLogin: false,
            showRegister: true,
        })
    }
    doLogin = () => {
        if (this.state.username === '' || this.state.password === '') {
            alert('Both fields required');
            return;
        }
        let user = {
            username: this.state.username, 
            password: this.state.password
        }
        let config = {
            method: "POST",           
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(user), 
        }
        fetch('http://localhost:3001/login', config)
            .then((response) => {                
                response.json()
                    .then((json) => {
                        // let data = JSON.stringify(json);
                        if (!response.ok) {
                            alert(json.message)
                        }
                        else {
                            localStorage.setItem('token', json.user.token);
                            localStorage.setItem('user', json.user)
                            console.log("success")
                            setGlobal({
                                loggedIn: true,
                                showList: true,
                                showLogin: false
                            });
                        }
                    })                
            })
            .catch((error) => {
                alert(error)
            })      
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
                    goToRegister={this.goToRegister}
                />

            </div>
        )
    }
}