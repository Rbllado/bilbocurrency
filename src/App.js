import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import "./App.css";

import CoinsList from "./components/Coins/CoinsList"
import History from "./components/Coins/History"

import Signup from './pages/Signup';
import Login from './pages/Login';
import Private from './pages/Private';
import Navbar from './components/Navbar';

import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Basic React Authentication</h1>

        <Switch>
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/private" component={Private} />


          <CoinsList  exact path="/coins"/>
          <History  path="/coins/updatehistory" />
        </Switch>
      </div>
    );
  }
}

export default App;
