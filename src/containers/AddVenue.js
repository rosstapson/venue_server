import React, { Component } from 'reactn';
//import Alert from '@material-ui/core/';
import AddVenueWidget from '../components/AddVenueWidget';

export default class AddVenue extends Component {
    submitVenue = (venue) => {        
        let config = {
            method: "POST",           
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(venue), // body data type must match "Content-Type" header
        }
        fetch('http://localhost:3001/venues', config)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                console.log(json)
                let tempVenues = this.state.venues.slice();
                tempVenues.push(venue)
                this.setState({
                    venues: tempVenues
                })
                this.props.showList()
            })
            .catch((error) => {
                alert(error)
            }) 
    }
    render() {
        return(
            <div>
                <AddVenueWidget showList={this.props.showList} submitVenue={this.submitVenue} />
            </div>
        )
    }
}