import React, { Component } from 'react';
//import {observer} from 'mobx-react';
import './App.css';
import NavBar from './components/NavBar';
import VenueList from './containers/VenueList';
import CssBaseline from '@material-ui/core/CssBaseline';
import AddVenue from './containers/AddVenue';
import Login from './containers/Login'
import Register from './containers/Register'

const title = 'Venu8';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: true,
      loggedIn: false,
      showLogin: false,
      showRegister: false,
    }
  }
  setLoggedIn = (user) => {
    this.setState({
      loggedIn: true,
      user: user
    })
  }
  showAddVenue = () => {
    this.setState({showList: false})
  }
  showVenueList = () => {
    this.setState({showList: true})
  }
  showLogin = () => {
    this.setState({ showLogin: true })
  }
  showRegister = () => {
    this.setState({ showRegister: true })
  }
  showRegisterSuccess = () => {
    alert('zomg')
  }
  render() {
    if (this.state.showLogin) {
      return (
        <div className="App">
        <CssBaseline />
        <Login setLoggedIn={this.setLoggedIn}/>
      </div>
      )
    }
    if (this.state.showRegister) {
      return(
        <div className="App">
          <CssBaseline />
          <Register showRegisterSuccess={this.showRegisterSuccess } />
        </div>
      )
    }
    return (
      <div className="App">
        <CssBaseline />
        <NavBar title={title} showAddVenue={this.showAddVenue} showLogin={this.showLogin} showRegister={this.showRegister} />
        {this.state.showList ? <VenueList /> : <AddVenue showList={this.showVenueList} /> }
       
      </div>
    );
  }
}

export default App;
