import React, { Component } from 'react';
//import Alert from '@material-ui/core/';
import AddVenueWidget from '../components/AddVenueWidget';

export default class AddVenue extends Component {
    submitVenue = (venue) => {
        alert('submitted')
    }
    render() {
        return(
            <div>
                <AddVenueWidget showList={this.props.showList} submitVenue={this.submitVenue} />
            </div>
        )
    }
}