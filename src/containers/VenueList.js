import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Venue from '../components/Venue';

// const venues = [{
//     name: 'Musketeers', address: 'Conabor Rd, Malvern', id: '0', imgUrl: 'https://s3-us-west-2.amazonaws.com/brewersassoc/wp-content/uploads/2017/04/draft-feature-463x600.jpg'}, 
//     {name: 'Knightsway Tavern', address: 'knightsway rd', id: '1', imgUrl: 'https://unsplash.com/photos/MYxvETrYabg'}
// ];
export default class VenueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            venues: '',
            searchString: ''
        }
    }
    // getVenues = async () => {
    //     try {
    //       let response = await fetch(
    //         'http://localhost:3001/venues'
    //       );
    //       let responseJson = await response.json();
    //       console.log(responseJson)
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    componentWillMount = () => {
        fetch('http://localhost:3001/venues', {crossdomain: true})
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                console.log(json)
                this.setState({
                    venues: json
                })
            })
            .catch((error) => {
                alert(error)
            }) 
    }
    onSearchInputChange = (event) => {
        this.setState({ searchString: event.target.value})
    }
    render() {
        return(
            <div>
                {this.state.venues ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Venues"   
                            margin="normal"
                            onChange={this.onSearchInputChange}
                            />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.venues.map(venue => (
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