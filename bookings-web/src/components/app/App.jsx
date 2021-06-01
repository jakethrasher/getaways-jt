import React, { useState } from 'react';
import Getaways from '../../containers/Getaways';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from '../home/HomePage';
import Header from '../header/Header';
import Signup from '../users/Signup';
import Login from '../users/Login';
import DetailPage from '../places/DetailPage';
import UserUpdate from '../user update/UserUpdate';

export default function App() {
  const [user, setUser] = useState(null);

  const handleUserChange = (user) => {
    setUser(user);
    localStorage.setItem('USER', JSON.stringify(user));
  };

  return (
    <>
      <Router>
        <Header user={user} handleUser={handleUserChange}/>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/getaways">
            <Getaways/>
          </Route>
          <Route exact path="/getaways/:id">
            <DetailPage/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
          <Route exact path="/login">
            <Login handleUser={handleUserChange}/>
          </Route>
          <Route exact path="/update">
            <UserUpdate/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
