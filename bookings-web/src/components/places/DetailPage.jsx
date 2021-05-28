/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createBooking, getPlaceById } from '../../services/placesApi';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import styles from './places.css';
import TextField from '@material-ui/core/TextField';

export default function DetailPage() {

  const { id } = useParams();
  const [place, setPlace] = useState({});
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createBooking(checkIn, checkOut, id);
    result.status ? setResponse(result.message) : setResponse(`You've booked ${place.name} from ${checkIn} to ${checkOut}`);
  };

  useEffect(() => {
    getPlaceById(id)
      .then(setPlace);
      
  }, []);

  const { name, image, description, location, pool, price_per_night: price, wifi, pet_friendly: pets } = place;
  return (
    <Container style={{ width:'90%' }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" align="left">
            {name}
          </Typography>
          <Typography variant="h6" align="left">
            {location}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={image} className={styles.detailImage}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" align="center">
            Booking
          </Typography>
          <form onSubmit={handleSubmit} className={styles.formStyle}>
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
          <Typography variant="body1" align="center">
            {response}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">
            {description}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" >
           Swimming Pool: { pool ? 'Yes' : 'No'}
          </Typography>
          <Typography variant="body1">
           Wifi: { wifi ? 'Yes' : 'No'}
          </Typography>
          <Typography variant="body1">
           Pets: { pets ? 'Yes' : 'No'}
          </Typography>
          <Typography variant="body1">
           $ {price} / night
          </Typography>
        </Grid>
      </Grid>
    </Container>    
  );
}
