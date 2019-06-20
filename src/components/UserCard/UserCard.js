import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      width: 200,
      margin: 20
    },
    media: {
      height: 140,
      background: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat"    
    },
  });

const User = ({user, profilePic, position}) => {
    const classes = useStyles();
    const {username, first_name, last_name, email, profile_url} = user.attributes

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={profile_url}
                    title="dude"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{username}</Typography>
                    <Typography gutterBottom variant="h6" component="h2">{first_name} {last_name}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{position}</Typography>
                    <a href={'mailto:' + user.attributes.email} style={{'textDecoration':'none'}}>
                        <Typography variant="subtitle2" color="textSecondary" component="p">{email}</Typography>
                    </a>
                </CardContent>
            </CardActionArea>            
        </Card>
        // <div>
        //     <h5>{user.attributes.username}</h5>
        //     <p>{user.attributes.first_name}</p>
        //     <p>{user.attributes.last_name}</p>
        //     <p>{user.attributes.title}</p>
        //     <p>{user.attributes.email}</p>      
        // </div>
    )
}

export default User;