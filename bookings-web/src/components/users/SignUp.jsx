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
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    const user = await signUpUser(name, email, password);
    console.log(user);
  };
 
  return (
    <form onSubmit={handleSignUp}>
      <input name="name" placeholder="enter your name" type="text" value={name} onChange={handleChange}/>
      <input name="email" placeholder="enter your email" type="text" value={email} onChange={handleChange}/>
      <input name="password" placeholder="enter your password" type="text" value={password} onChange={handleChange}/>
      <button>Sign Up</button>
    </form>
  );
}
