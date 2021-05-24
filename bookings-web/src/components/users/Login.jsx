/* eslint-disable max-len */
import React, { useState } from 'react';
import { loginUser } from '../../services/placesApi';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMSG, setErrorMSG] = useState('');

  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await loginUser(email, password);
    if(user.status) setErrorMSG(user.message);
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="email" type="text" placeholder="enter email" onChange={handleChange} required/>
        <input name="password" type="text" placeholder="enter password" onChange={handleChange} required/>
        <button>Login</button>
      </form>
      {errorMSG && <h1>{errorMSG}</h1>}
    </div>
  );
}
