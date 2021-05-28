/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import styles from './listPage.css';
import Container from '@material-ui/core/Container';
import { CgArrowLeftO, CgArrowRightO } from 'react-icons/cg';

const Getaways = () => {
  const [places, setPlaces] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getPlaces(page)
      .then(setPlaces);
  }, [page]);

  const changePage = (num) => {
    setPage(prevState => prevState + num); 
  };

  return (
    <Container align="center">
      <section className={styles.pageButtonContainer}>
        <CgArrowLeftO onClick={() => changePage(-1)} size="2em" className={styles.pagination}/>
        <CgArrowRightO onClick={() => changePage(1)} size="2em" className={styles.pagination}/>
      </section>
      <div className={styles.listContainer}>
        <PlaceList places={places} />
      </div>
    </Container>

  );
};

      

export default Getaways;
      
