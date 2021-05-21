import React from 'react';
import Getaways from '../../containers/Getaways';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../home/HomePage';
import Header from '../header/Header';
import Signup from '../users/Signup';
import Login from '../users/Login';

export default function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/getaways" component={Getaways}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </>
  );
}
