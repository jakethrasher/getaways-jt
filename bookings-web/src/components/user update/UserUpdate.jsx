/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

function UserUpdate() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = ({ target: { name, value } }) => {
    name === 'email' ? setEmail(value) : setUsername(value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField name="username" label="username" onChange={handleInputChange} value={username}/>
        <TextField name="email" label="email" onChange={handleInputChange} value={email}/>
        <button>submit</button>
      </form>
    </Container>
  );
}

UserUpdate.propTypes = {
  user:PropTypes.shape({
    username:PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  })
};

export default UserUpdate;


