/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPlaceById } from '../../services/placesApi';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import styles from './places.css';
import Divider from '@material-ui/core/Divider';

export default function DetailPage() {

  const { id } = useParams();
  const [place, setPlace] = useState({});
  
  useEffect(() => {
    getPlaceById(id)
      .then(setPlace);
      
  }, []);

  console.log(place);
  const { name, image, description, location, pool, price_per_night: price, wifi } = place;
  return (
    <Container style={{ display: 'flex' }}>
      <Grid container item xs={6}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            {name}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <img src={image} className={styles.detailImage}/>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1">
            {description}
          </Typography>
          <Typography variant="body1">
            {location}
          </Typography>
        </Grid>
        <Grid item xs={4} align="right">
          <Typography variant="body1" >
           Swimming Pool: { pool ? 'Yes' : 'No'}
          </Typography>
          <Typography variant="body1">
           Wifi: { wifi ? 'Yes' : 'No'}
          </Typography>
          <Typography variant="body1">
           $ {price} / night
          </Typography>
        </Grid>
      </Grid>

      <Divider orientation="vertical" flexItem/>

      <Grid container item xs={6} direction="column">
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Booking
          </Typography>
        </Grid>
      </Grid>
      
      
    </Container>
         
     
  );
}
        
           
        
      
