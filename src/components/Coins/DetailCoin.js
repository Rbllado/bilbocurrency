import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class CoinsList extends Component {
  state = {
    coin: {}
  };



  getCoin = () => {


    console.log(this.props.match);
    
    
    const id = this.props.match.params._id;
    console.log(id);
    

    axios
      .get(`http://localhost:5000/coins/detail/${id}`)
      //   .headers(CMC_PRO_API_KEY = "3e18416b-942d-419a-89ab-8f8058b12944")
      .then(response => {
        
        // In that way I put only the array of the fields into listOfCoins
        // If I am taking from the API
        // const listOfCoins = response.data.data;

        const coin = response.data;
        console.log("coin", coin);

        this.setState({ coin });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getCoin();
  }

  render() {
    return (
      <div className="coin-container">
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}

export default CoinsList;
