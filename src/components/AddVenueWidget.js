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
    Input,
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
            open: false,
            showUpload: false,
            file: ''
        }
    }
    componentWillMount(){
        let height, width = 0;
        height = window.innerHeight / 2;
        width = window.innerWidth / 2;
        this.setState({
            height:  height + 'px',
            width:  width + 'px'
        });
      }
    handleSubmit = () => {
        if (!this.state.venue.name || !this.state.venue.email) {
            this.setState({open: true})
        }
        else {
            let tempVenue = Object.assign({}, this.state.venue, {tags:this.state.tags});
            tempVenue.imageUrl = this.state.file.name;
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
    showUpload = () => {
        this.setState({ showUpload: true })
    }
    hideUpload = () => {
        this.setState({ showUpload: false})
    }
    handleUpload = () => {
        let formData = new FormData();
        formData.append('file', this.state.file, this.state.file.name)
        let config = {
            method: 'POST',
            body: formData
        }
        fetch('http://localhost:3001/images', config)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                console.log(json)
                
            })
            .catch((error) => {
                alert(error)
            }) 
    }
    fileChange = (event) => {
        console.log(event.target.files[0])
        this.setState({file: event.target.files[0]})
        
    }
    render() {
        const cardStyle = {            
            width: this.state.width
        }
        return(
            <div>
                <Card style={cardStyle}>                   
                    <CardContent>
                    <Typography variant="headline" component="h2">
                        Add your venue:
                    </Typography>
                    <TextField style={{padding: 16, display: 'block'}}
                        required
                        label="Name"
                        id="name"  
                        margin="normal"
                        onChange={this.onInputChange}
                        />
                    <TextField style={{padding: 16, display: 'block'}}
                        id="address"
                        label="Venue address"   
                        margin="normal"
                        onChange={this.onInputChange}
                        />
                    <TextField style={{padding: 16, display: 'block'}}
                        id="contactUser"
                        label="Contact Number"   
                        margin="normal"
                        onChange={this.onInputChange}
                        />
                    <TextField style={{padding: 16, display: 'block'}}
                        required
                        id="email"
                        label="Email"   
                        margin="normal"
                        onChange={this.onInputChange}
                        />
                    <ChipInput style={{padding: 16, display: 'block'}}
                        value={this.state.tags}
                        label="Tags"
                        helperText="E.g. kid-friendly, live music, open air"
                        onAdd={(chip) => this.handleAddChip(chip)}
                        onDelete={(chip, index) => this.handleDeleteChip(chip, index)}
                        />                    
                    <Dialog
                        style={{padding: 16, display: 'block'}}
                        open={this.state.showUpload}
                        onClose={this.hideUpload}
                        aria-labelledby="upload-dialog-title"
                        aria-describedby="upload-dialog-description"
                        >
                        <DialogTitle id="upload-dialog-title">{"Select Image"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="upload-dialog-description">
                            Upload a picture
                            </DialogContentText>
                            <Input type={'file'} onChange={this.fileChange }/>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleUpload} variant="outlined" color="primary" autoFocus>
                                Submit
                            </Button>
                            <Button onClick={this.hideUpload} variant="outlined" color="primary" >
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                    </CardContent>
                    <CardActions>
                        <Button color="primary" variant="outlined" onClick={this.showUpload} target="_blank">
                                Upload a picture
                            </Button>
                        <Button size="medium" variant="outlined" color="primary" onClick={this.handleSubmit} target="_blank">
                            Submit
                        </Button>
                        <Button size="medium" variant="outlined" color="primary" onClick={this.props.showList} target="_blank">
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
                            <Button onClick={this.handleClose} color="primary" variant="outlined" autoFocus>
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