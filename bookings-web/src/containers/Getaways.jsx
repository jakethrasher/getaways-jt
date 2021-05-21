import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import styles from './listPage.css'
const Getaways = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlaces().then(setPlaces);
  }, []);

  return (
    <div className={styles.listContainer}>
      <PlaceList places={places} />
    </div>

  )
};

export default Getaways;
