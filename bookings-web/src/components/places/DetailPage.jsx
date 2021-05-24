/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createBooking, getPlaceById } from '../../services/placesApi';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import styles from './places.css';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

export default function DetailPage() {

  const { id } = useParams();
  const [place, setPlace] = useState({});
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createBooking(checkIn, 
      checkOut, id);
    console.log(response);
  };

  useEffect(() => {
    getPlaceById(id)
      .then(setPlace);
      
  }, []);

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
        <Grid item xs={6}>
          <form onSubmit={handleSubmit}>
            <TextField
              type="date"
              label="Check-in"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setCheckIn(e.target.value)}
            />
            <TextField
              type="date"
              label="Checkout"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setCheckOut(e.target.value)}
            />
            <button>submit</button>
          </form>
        </Grid>
      </Grid>
    </Container>    
  );
}
