import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import LoginPage from './pages/Login/Login'
import InfoPage from './pages/InfoPage/InfoPage';

import './App.css';
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/signup' component={LoginPage}/>
        <Route exact path='/info' component={InfoPage}/>
        {/* <Route path='/shop' component={Shoppage}/>           */}
        {/* <Route exact path='/checkout' component={CheckoutPage}/> */}
      </Switch>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default App;
