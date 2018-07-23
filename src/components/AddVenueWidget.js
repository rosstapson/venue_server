import React, { Component } from 'react';
import {
    Button,
    Card, 
    CardActions,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Typography
    } from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';

export default class AddVenueWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: ['a la carte menu'],
            venue: {},
            open: false
        }
    }
    handleSubmit = () => {
        if (!this.state.venue.name || !this.state.venue.email) {
            this.setState({open: true})
        }
        else {
            let tempVenue = Object.assign({}, this.state.venue, {tags:this.state.tags});
            this.props.submitVenue(tempVenue);
        }        
    }
    onInputChange = (event) => {
        let tempVenue = {...this.state.venue};
        tempVenue[event.target.id] = event.target.value;
        console.log(tempVenue)
        this.setState({venue: tempVenue});
    }
    handleAddChip = (chip) => {
        let tempTags = this.state.tags.slice();
        tempTags.push(chip);
        this.setState({tags: tempTags})
    }
    handleDeleteChip = (chip) => {
        let tempTags = this.state.tags.filter((instance) => {
            return chip !== instance;
        });
        this.setState({tags: tempTags})
    }
    handleClose = () => {
        this.setState({open: false})
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
                        required
                        label="Name"
                        id="name"  
                        margin="normal"
                        onChange={this.onInputChange}
                        />
                    <TextField style={{padding: 24}}
                        id="address"
                        label="Venue address"   
                        margin="normal"
                        onChange={this.onInputChange}
                        />
                    <TextField style={{padding: 24}}
                        id="contactUser"
                        label="Contact Number"   
                        margin="normal"
                        onChange={this.onInputChange}
                        />
                    <TextField style={{padding: 24}}
                        required
                        id="email"
                        label="Email"   
                        margin="normal"
                        onChange={this.onInputChange}
                        />
                    <ChipInput 
                        value={this.state.tags}
                        label="Tags"
                        helperText="E.g. kid-friendly, live music, open air"
                        onAdd={(chip) => this.handleAddChip(chip)}
                        onDelete={(chip, index) => this.handleDeleteChip(chip, index)}
                        />
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary" onClick={this.handleSubmit} target="_blank">
                        Submit
                    </Button>
                    <Button size="small" color="primary" onClick={this.props.showList} target="_blank">
                        Cancel
                    </Button>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        >
                        <DialogTitle id="alert-dialog-title">{"Form incomplete"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                            Required fields are missing
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>                            
                            <Button onClick={this.handleClose} color="primary" autoFocus>
                            Oh bother.
                            </Button>
                        </DialogActions>
                    </Dialog>
                    </CardActions>
                </Card>
            </div>
        )
    }
}