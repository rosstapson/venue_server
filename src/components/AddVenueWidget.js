import React, { Component } from 'react';
import {
    Card, 
    CardActions,
    CardContent,
    Button,
    Typography
    } from '@material-ui/core';

export default class AddVenueWidget extends Component {
    handleSubmit = () => {
        this.props.submitVenue();
    }
    render() {
        return(
            <div>
                <Card >                   
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Add your venue:
                    </Typography>
                    
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