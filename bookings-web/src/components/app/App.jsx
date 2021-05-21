import React from 'react';
import Getaways from '../../containers/Getaways';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../home/HomePage';
import Header from '../header/Header';

export default function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/getaways" component={Getaways}/>
      </Switch>
    </>
  );
}
