import React from 'react';
import { logoutUser } from '../../services/placesApi';
import { NavLink } from 'react-router-dom';
import './header.css';
export default function Header() {
  const handleClick = async () => {
    const response = await logoutUser();
    console.log(response);
  };
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/getaways">Getaways</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/" onClick={handleClick}>Log Out</NavLink>
    </>
  );
}
