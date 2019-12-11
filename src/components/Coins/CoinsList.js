import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class CoinsList extends Component {
  state = {
    listOfCoins: []
  };

  getAllCoins = () => {
    axios
      .get("http://localhost:5000/coins")
      //   .headers(CMC_PRO_API_KEY = "3e18416b-942d-419a-89ab-8f8058b12944")
      .then(response => {

        // In that way I put only the array of the fields into listOfCoins
        const listOfCoins = response.data.data;

        console.log(listOfCoins);
        console.log(listOfCoins[0].name);

        this.setState({ listOfCoins });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getAllCoins();
  }

  render() {
    return (
      <div>
        {this.state.listOfCoins.map(coin => {
          return (
            //We take the key from database that is unique..
            <div key={coin._id} className="Project">
              <h1>{coin.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CoinsList;
