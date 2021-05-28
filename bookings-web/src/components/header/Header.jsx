/* eslint-disable max-len */
import React from 'react';
import { logoutUser } from '../../services/placesApi';
import { NavLink } from 'react-router-dom';
import styles from './header.css';
import PropTypes from 'prop-types';

export default function Header({ user }) {
  //conditionally render link for user update
  console.log(user);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.links}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/getaways">Getaways</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Login</NavLink>
        {user && <NavLink to="/update">Edit Profile</NavLink>}
      </div>
      <div className={styles.logOut}>
        <NavLink to="/" onClick={async () => await logoutUser()}>Log Out</NavLink>
      </div>
    </div>
  );
}
      
Header.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    email:PropTypes.string,
  }),
};


