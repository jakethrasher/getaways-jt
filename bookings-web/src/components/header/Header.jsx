/* eslint-disable max-len */
import React from 'react';
import { logoutUser } from '../../services/placesApi';
import { NavLink } from 'react-router-dom';
import styles from './header.css';

export default function Header() {
  
  return (
    <div className={styles.headerContainer}>
      <div className={styles.links}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/getaways">Getaways</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
      <div className={styles.logOut}>
        <NavLink to="/" onClick={async () => await logoutUser()}>Log Out</NavLink>
      </div>
    </div>
  );
}
      


