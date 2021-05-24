/* eslint-disable max-len */
import React, { useState } from 'react';
import { signUpUser } from '../../services/placesApi';

export default function Signup() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);  
  };

  return (
    <form onSubmit={async () => await signUpUser(name, email, password) }>
      <input name="name" placeholder="enter your name" type="text" value={name} onChange={handleChange} required/>
      <input name="email" placeholder="enter your email" type="text" value={email} onChange={handleChange} required/>
      <input name="password" placeholder="enter your password" type="text" value={password} onChange={handleChange} required/>
      <button>Sign Up</button>
    </form>
  );
}
