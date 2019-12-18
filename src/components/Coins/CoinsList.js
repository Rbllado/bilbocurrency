import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class CoinsList extends Component {
  state = {
    name: "",
    listOfCoins: [],
    copyListOfCoins: []
  };

  getAllCoins = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/coins`)
      //   .headers(CMC_PRO_API_KEY = "3e18416b-942d-419a-89ab-8f8058b12944")
      .then(response => {

        // In that way I put only the array of the fields into listOfCoins
        // If I am taking from the API

        const listOfCoins = response.data;
        const price = response.data[0].price.toFixed(2);


        // To fixed to decimal 
        for(let i = 0; i < listOfCoins.length; i++){
            listOfCoins[i].price = listOfCoins[i].price.toFixed(4);
        }
        
      
        const copyListOfCoins = [...listOfCoins];

        this.setState({
          listOfCoins,
          copyListOfCoins: copyListOfCoins.slice(0, 20)
        });
      })
      .catch(err => console.log(err));
  };

  handleInput = e => {
    // take the value of every name and put the value of each one.
    const { name, value } = e.target;
    this.setState({ [name]: value });

    const copyListOfCoins = this.state.listOfCoins.filter(elem => {
      return elem.name.toLowerCase().includes(e.target.value);
    });

    this.setState({ copyListOfCoins });
  };

  componentDidMount() {
    this.getAllCoins();
  }

  render() {
    return (
      <div className="coin-container ">
        <div className="col-lg-8 search-bar">
          <input
            className="form-control"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
            placeholder="coin to search"
          />
        </div>

            <div className="row list-coins">
        {this.state.copyListOfCoins.map(coin => {
          return (
            //We take the key from database that is unique..
            //* classname = coins *
              <div className="col-lg-3 col-md-6 col-sm 12">
                <div
                  className="card coins"
                  key={coin._id}
                >
                  <img className="card-img-top coinlist-logo" src={coin.img} alt="Card" />
                  <div className="card-body">
                    <h5 className="card-title">{coin.name}</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">${coin.price}</li>
                    <li className="list-group-item">Tag: {coin.tags}</li>
                    <li className="list-group-item">{coin.symbol}</li>
                  </ul>
                  <div className="card-body">
                    <Link
                      to={`/coins/detail/${coin._id}`}
                      key={coin._id}
                      className="card-link"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
          );
        })}
            </div>
      </div>
    );
  }
}

export default CoinsList;
