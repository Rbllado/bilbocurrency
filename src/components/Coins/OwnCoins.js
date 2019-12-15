import React, { Component } from "react";
import axios from "axios";
import { get } from "http";

class OwnCoins extends Component {
  state = {
    allOwnCoin: []
  };

  getAllOwnCoins = () => {
    axios
      .get("http://localhost:5000/owncoins/", { withCredentials: true })
      .then(result => {
        console.log("result: ", result.data.owncoins);

        const allOwnCoin = result.data.owncoins;
        this.setState({ allOwnCoin });
      })
      .catch(err => console.log(err));
  };


  removeOwnCoin = () => {
      console.log("nada ahora");
      
  }



  
  componentDidMount() {
    this.getAllOwnCoins();
  }

  render() {
    const { allOwnCoin } = this.state;
    return (
        
      <div>
        <h1>List your coins</h1>
        <div className="favorite-coins">
          {allOwnCoin.length ? (
            allOwnCoin.map(owncoin => {
              return (
                <div className="favorite-coin">
                  <h1>{owncoin.name}</h1>
                  <h2>{owncoin.img}</h2>
                  <h3>{owncoin.symbol}</h3>
                  <p>{owncoin.description}</p>
                  <button
                    onClick={() => {
                      this.removeOwnCoin(owncoin._id);
                    }}
                    key={owncoin._id}
                  >
                    Eliminar
                  </button>
                </div>
              );
            })
          ) : (
            <h2>Loading</h2>
          )}
        </div>
      </div>
    );
  }
}

export default OwnCoins;
