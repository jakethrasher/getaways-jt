/* eslint-disable max-len */
import React, { useState } from 'react';
import { loginUser } from '../../services/placesApi';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(email, password);
    console.log(res);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="text" placeholder="enter email" onChange={handleChange}/>
      <input name="password" type="text" placeholder="enter password" onChange={handleChange}/>
      <button>Login</button>
    </form>
  );
}
