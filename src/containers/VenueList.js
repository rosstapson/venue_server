import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Venue from '../components/Venue';

export default class VenueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            venues: '',
            filteredVenues: '',
            searchString: ''
        }
    }
    
    componentWillMount = () => {
        fetch('http://localhost:3001/venues', {crossdomain: true})
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                console.log(json)
                this.setState({
                    venues: json,
                    filteredVenues: json
                })
            })
            .catch((error) => {
                alert(error)
            }) 
    }
    onSearchInputChange = (event) => {
        let searchString = event.target.value;
        let tempVenues = this.state.venues.filter((venue) => {
            return venue.name.includes(searchString);
        })
        console.log(tempVenues)
        this.setState({ searchString: searchString, filteredVenues: tempVenues})
    }
    render() {
        return(
            <div>
                {this.state.filteredVenues ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Filter results"   
                            margin="normal"
                            onChange={this.onSearchInputChange}
                            />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.filteredVenues.map(venue => (
                                <Grid item xs={12} sm={6} lg={4} xl={3} key={venue._id}>
                                    <Venue venue={venue} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                )
            : 'No venues found'
            
            }
            </div>
        )
    }
}