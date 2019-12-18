import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


import index from "./pages/index"
import CoinsList from "./components/Coins/CoinsList"
import History from "./components/Coins/History"
import DetailCoin from "./components/Coins/DetailCoin";
import Favorites from "./components/Favorites";
import AddOwnCoins from "./components/Coins/AddOwnCoins";
import OwnCoins from "./components/Coins/OwnCoins";
import EditProfile from "./components/EditProfile"
import Default from "./pages/Default"

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

        <Switch>
        <AnonRoute exact path="/" component={index} />
          
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          <PrivateRoute path="/editprofile"  component={EditProfile} />

        {/* Should be accesible for both site... now it's to try to add favorites */}
          <Route  exact path="/coins" component={ CoinsList }/>
          <PrivateRoute path="/coins/detail/:id"  component={DetailCoin} />

          <PrivateRoute  exact path="/owncoins/add" component={ AddOwnCoins }/>
          <PrivateRoute  exact path="/owncoins/" component={ OwnCoins }/>
          
          {/* Change to coins */}
          <History  path="/coins/updatehistory" />
          {/* <DetailCoin path="/coins/detail/:id" /> */}
          {/* <Route path="/coins/detail/:id"  component={DetailCoin} /> */}
          <PrivateRoute path="/favorites" component={ Favorites }/>
          <Route component={ Default }/>

        </Switch>
      </div>
    );
  }
}

export default App;
