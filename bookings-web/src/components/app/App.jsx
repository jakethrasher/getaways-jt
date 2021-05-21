import React from 'react';
import Getaways from '../../containers/Getaways';
import { Switch, Route} from 'react-router-dom';
import HomePage from '../home/HomePage';

export default function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/getaways' component={Getaways}/>
    </Switch>
  )
}
