import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class CoinsList extends Component {
  state = {
    coin: {}
  };

  getCoin = () => {
    console.log("Heyyy", this.props.match.params);

    const id = this.props.match.params.id;
    console.log(id);

    axios
      .post(`http://localhost:5000/coins/detail/${id}`)
      //   .get(`http://localhost:5000/coins/detail/5`)
      //   .headers(CMC_PRO_API_KEY = "3e18416b-942d-419a-89ab-8f8058b12944")
      .then(response => {
        // I will have all the information of a coin.
        const coin = response.data;
        console.log("coin", coin.name);

        this.setState({ coin });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getCoin();
  }

  render() {
    return (
      <div className="detail-container">
        <div className="detail-coin">
          <div>
            <img src={this.state.coin.img} alt="" />
            <h2>{this.state.coin.name}</h2>
          </div>
          <p>{this.state.coin.description}</p>
          <h3>{this.state.coin.price}</h3>
          <h4>{this.state.coin.symbol}</h4>
          <h4>{this.state.coin.web}</h4>
          <h4>{this.state.coin.tags}</h4>
        </div>
      </div>
    );
  }
}

export default CoinsList;
