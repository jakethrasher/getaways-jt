import React from 'react';
import Getaways from '../../containers/Getaways';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../home/HomePage';
import Header from '../header/Header';
import Signup from '../users/Signup';
import Login from '../users/Login';
import DetailPage from '../places/DetailPage';

export default function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/getaways" component={Getaways}/>
        <Route exact path="/getaways/:id" component={DetailPage}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </>
  );
}
