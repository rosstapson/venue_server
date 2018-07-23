import React, { Component } from 'react';
import {
    Card, 
    CardActions,
    CardContent,
    Button,
    TextField,
    Typography
    } from '@material-ui/core';

export default class AddVenueWidget extends Component {
    handleSubmit = () => {
        this.props.submitVenue();
    }
    onInputChange = (event) => {
        let tempState = {...this.state};
        tempState[event.target.id] = event.target.value;
        console.log(tempState)
        this.setState(tempState);
      }
    render() {
        return(
            <div>
                <Card >                   
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Add your venue:
                    </Typography>
                    <TextField style={{padding: 24}}
                        id="name"
                        placeholder="Venue name"   
                        margin="normal"
                        onChange={this.onInputChange}
                        />
                    <TextField style={{padding: 24}}
                        id="address"
                        placeholder="Venue address"   
                        margin="normal"
                        onChange={this.onInputChange}
                        />
                    <TextField style={{padding: 24}}
                        id="contactUser"
                        placeholder="Contact Number"   
                        margin="normal"
                        onChange={this.onInputChange}
                        />
                    <TextField style={{padding: 24}}
                        id="email"
                        placeholder="Email"   
                        margin="normal"
                        onChange={this.onInputChange}
                        />
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary" onClick={this.handleSubmit} target="_blank">
                        Submit
                    </Button>
                    <Button size="small" color="primary" onClick={this.props.showList} target="_blank">
                        Cancel
                    </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}