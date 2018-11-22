import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export default class Venue extends Component {
    
    render() {
        return (
            <div>
                <Card >
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                    image={'http://localhost:3001/image/' + this.props.venue.imageUrl}
                    title={this.props.venue.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {this.props.venue.name}
                    </Typography>
                    <Typography component="p">
                        {this.props.venue.address}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary" href={this.props.venue.url} target="_blank">
                        Go To Website
                    </Button>
                    {!this.props.venue.menu &&
                        <Button size="small" color="primary" onClick={() => { alert('onClick') }} target="_blank">
                            View Menu
                        </Button>
                    }
                    </CardActions>
                </Card>
            </div>
        )
    }
}