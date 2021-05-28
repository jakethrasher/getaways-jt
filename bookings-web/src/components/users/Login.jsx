/* eslint-disable max-len */
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { loginUser } from '../../services/placesApi';
import PropTypes from 'prop-types';

export default function Login({ handleUser }) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await loginUser(email, password);
    handleUser(user);
   
    if(!user.status){
      history.push('/getaways');
    } else alert(user.message);
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="email" value={email} type="text" placeholder="enter email" onChange={handleChange} required/>
        <input name="password" value={password} type="text" placeholder="enter password" onChange={handleChange} required/>
        <button>Login</button>
      </form>
    </div>
  );
}

Login.propTypes = {
  handleUser:PropTypes.func.isRequired,
};
