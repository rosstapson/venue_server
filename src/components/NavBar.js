import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }
    handleClick = () => {        
        this.setState({ menuOpen: true })
    }
    handleAddVenue = () => {
        this.props.showAddVenue();
        this.setState({ menuOpen: false})
    }
    render() {
        //console.log(this.props)
        return(
            <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon onClick={this.handleClick} /> 
                    </IconButton>
                    <Typography variant="title" color="inherit">
                        {this.props.title}
                    </Typography>
                    <Menu open={this.state.menuOpen} >
                        <MenuItem onClick={this.handleAddVenue}>Add Venue</MenuItem>
                    </Menu>
                    <Button color="inherit" onClick={this.props.showLogin } >Login</Button>
                    <Button color="inherit" onClick={this.props.showRegister } >Register</Button>
                </Toolbar>
            </AppBar>
            </div>
        )
    }
}
export default withStyles(styles)(NavBar);
