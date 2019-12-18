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
        // const listOfCoins = response.data.data;

        const listOfCoins = response.data;
        console.log("ListofCoins", listOfCoins);

        const copyListOfCoins = [...listOfCoins]

        this.setState({ listOfCoins, copyListOfCoins: copyListOfCoins.slice(0,20) });

        
      })
      .catch(err => console.log(err));
  };

  handleInput = e => {
    // take the value of every name and put the value of each one.
    const { name, value } = e.target;
    this.setState({ [name]: value });

    const copyListOfCoins = this.state.listOfCoins.filter((elem) => {
      return elem.name.toLowerCase().includes(e.target.value);
    })

    

    this.setState({copyListOfCoins});

  };


  componentDidMount() {
    this.getAllCoins();
  }

  render() {
    return (
      <div className="coin-container">
        <div className="col-lg-12">
          <input
            className="form-control"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
            placeholder="coin to search"
          />
        </div>


        {/* <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div> */}





        {this.state.copyListOfCoins.map(coin => {
          return (
            //We take the key from database that is unique..
            //* classname = coins *
            <div className="coins-item">
              {/* Try with card decker */}

              <div
                class="card coins "
                key={coin._id}
                style={{ width: "12rem" }}
              >
                <img class="card-img-top" src={coin.img} alt="Card" />
                <div class="card-body">
                  <h5 class="card-title">{coin.name}</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">{coin.price}</li>
                  <li class="list-group-item">{coin.tags}</li>
                  <li class="list-group-item">{coin.symbol}</li>
                </ul>
                <div class="card-body">
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
    );
  }
}

export default CoinsList;
