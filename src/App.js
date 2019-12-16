import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import "./App.css";


import CoinsList from "./components/Coins/CoinsList"
import History from "./components/Coins/History"
import DetailCoin from "./components/Coins/DetailCoin";
import Favorites from "./components/Favorites";
import AddOwnCoins from "./components/Coins/AddOwnCoins";
import OwnCoins from "./components/Coins/OwnCoins";

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

        {/* Should be accesible for both site... now it's to try to add favorites */}
          <Route  exact path="/coins" component={ CoinsList }/>
          <PrivateRoute  exact path="/owncoins/add" component={ AddOwnCoins }/>
          <PrivateRoute  exact path="/owncoins/" component={ OwnCoins }/>
          
          <History  path="/coins/updatehistory" />
          {/* <DetailCoin path="/coins/detail/:id" /> */}
          {/* <Route path="/coins/detail/:id"  component={DetailCoin} /> */}
          <PrivateRoute path="/coins/detail/:id"  component={DetailCoin} />
          <PrivateRoute path="/favorites" component={ Favorites }/>
        </Switch>
      </div>
    );
  }
}

export default App;
