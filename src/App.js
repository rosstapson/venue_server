import React, { Component, setGlobal } from 'reactn';
import './App.css';
import NavBar from './components/NavBar';
import VenueList from './containers/VenueList';
import CssBaseline from '@material-ui/core/CssBaseline';
import AddVenue from './containers/AddVenue';
import Login from './containers/Login'
import Register from './containers/Register'

const title = 'Venu8';
setGlobal({
  loggedIn: false,
  showList: false,
  showLogin: true,
  showRegister: false,
  token: localStorage.getItem('token'),
  user: localStorage.getItem('user')
})

class App extends Component {
  componentDidMount = () => {
    if (this.global.token && this.global.user) {
      // TODO: check token against api
      setGlobal({
        loggedIn: true,
        showList: true,
        showLogin: false
      })
    }
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
    if (this.global.showLogin) {
      return (
        <div className="App">
        <CssBaseline />
        <Login />
      </div>
      )
    }
    if (this.global.showRegister) {
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
        {this.global.showList ? <VenueList /> : <AddVenue showList={this.showVenueList} /> }
       
      </div>
    );
  }
}

export default App;
