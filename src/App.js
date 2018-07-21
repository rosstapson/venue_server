import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import VenueList from './containers/VenueList';
import CssBaseline from '@material-ui/core/CssBaseline';
import AddVenue from './containers/AddVenue';

const title = 'Venu8';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: true
    }
  }
  showAddVenue = () => {
    this.setState({showList: false})
  }
  showVenueList = () => {
    this.setState({showList: true})
  }
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <NavBar title={title} showAddVenue={this.showAddVenue}/>
        {this.state.showList ? <VenueList /> : <AddVenue showList={this.showVenueList} /> }
       
      </div>
    );
  }
}

export default App;
