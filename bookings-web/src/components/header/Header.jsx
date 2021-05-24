import React from 'react';
import { logoutUser } from '../../services/placesApi';
import { NavLink } from 'react-router-dom';
import './header.css';

export default function Header() {
  
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/getaways">Getaways</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/" onClick={async () => await logoutUser()}>Log Out</NavLink>
    </>
  );
}

