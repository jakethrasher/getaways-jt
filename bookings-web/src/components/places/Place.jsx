/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    maxWidth: 325,
    margin: 5,
    borderRadius: 18,
  },
  media: {
    height: 250,
  },
});

const Place = ({
  id,
  name,
  description,
  location,
  pricePerNight,
  image,
  maxGuests,
  petFriendly,
  pool,
  wifi,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Share
        </Button>
        <Button size="small" color="primary">
        Learn More
        </Button>
      </CardActions>
    </Card>
    
  );
};
        

Place.propTypes = {
  id:PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageThumbnail: PropTypes.string.isRequired,
  maxGuests: PropTypes.number.isRequired,
  petFriendly: PropTypes.bool.isRequired,
  pool: PropTypes.bool.isRequired,
  wifi: PropTypes.bool.isRequired,
};

export default Place;

{/* <ul className={styles.listItem}>
<img src={image} className={styles.listPageImage}/>
<li>{name}</li>
<li>{description}</li>
<li>{location}</li>
<li>{pricePerNight}</li>
<li>{maxGuests}</li>
<li>{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
{pool ? <li>Has a Pool!</li> : null}
{wifi ? <li>Free Wifi</li> : null}
</ul> */}
