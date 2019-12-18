import React, { Component } from "react";
import axios from "axios";
import { get } from "http";

class OwnCoins extends Component {
  state = {
    allOwnCoin: []
  };

  getAllOwnCoins = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/owncoins/`, { withCredentials: true })
      .then(result => {
        console.log("result: ", result.data.owncoins);

        const allOwnCoin = result.data.owncoins;
        this.setState({ allOwnCoin });
      })
      .catch(err => console.log(err));
  };


  removeOwnCoin = (id) => {
      console.log("nada ahora");
      console.log(id);
    axios.post(`${process.env.REACT_APP_API_URL}/owncoins/remove/${id}`, null, {
      withCredentials: true
    });

    this.setState({
      allOwnCoin: this.state.allOwnCoin.filter(elem => {
        return elem._id !== id;
      })
    });
      
  }



  
  componentDidMount() {
    this.getAllOwnCoins();
  }

  render() {
    const { allOwnCoin } = this.state;
    return (
        
      <div>
        <br/>
        {allOwnCoin.length ? (
            allOwnCoin.map((owncoin, key) => {
              return (
        <div  key={key} className="card  owncoins-cards col-md-8 col-lg-8 col-sm-12">
          <br/>
          <img className="card-img-top owncoin-logo" src={owncoin.img} alt="Card" />
          <div className="card-body">
            <h5 className="card-title">Name: {owncoin.name}</h5>
            <h5 className="card-title">Symbol: {owncoin.symbol}</h5>
            <h5 className="card-title">Euros: {owncoin.price}</h5>
            
            <p className="card-text owncoin-descriptoin-detail">
              {owncoin.description}
            </p>
            <p className="card-text">
            <button
                  onClick={() => {
                    this.removeOwnCoin(owncoin._id);
                  }}
                  key={owncoin._id}
                  className="btn btn-danger"
                  
                >
                  Eliminar
                </button>
            </p>
          </div>
          </div>
          );
        })
         
         ) : (
          <h2>You don´t have own coins</h2>
      )}
      </div>
    );
  }
}

export default OwnCoins;
