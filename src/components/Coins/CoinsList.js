import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class CoinsList extends Component {
  state = {
    listOfCoins: []
  };

  getAllCoins = () => {
    axios
      .get("{http://localhost:5000}/coins")
      //   .headers(CMC_PRO_API_KEY = "3e18416b-942d-419a-89ab-8f8058b12944")
      .then(response => {
        
        // In that way I put only the array of the fields into listOfCoins
        // If I am taking from the API
        // const listOfCoins = response.data.data;

        const listOfCoins = response.data;
        console.log("ListofCoins", listOfCoins);

        this.setState({ listOfCoins });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getAllCoins();
  }

  render() {
    return (
      <div className="coin-container">
        {this.state.listOfCoins.map(coin => {
          return (
            //We take the key from database that is unique..
            <Link to={`/coins/detail/${coin._id}`} key={coin._id} className="coins" >
                
              <h1>{coin.name}</h1>
              <h3>{coin.symbol}</h3>
              <h3>{coin.price}</h3>
              <h3>{coin.tags}</h3>
              <img src={coin.img} alt="coin"/>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default CoinsList;
