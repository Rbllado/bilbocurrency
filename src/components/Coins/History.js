import React, { Component } from 'react'
import axios from "axios";

class History extends Component {
    state= {
        historyCoins: []
    }

    getRefreshHistory = () => {
        axios
          .get("http://localhost:5000/coins/updatehistory")
          //   .headers(CMC_PRO_API_KEY = "3e18416b-942d-419a-89ab-8f8058b12944")
          .then(response => {



            console.log(response);
            
              const historyCoins = response.data;
              console.log("History", historyCoins);
    
            this.setState({ historyCoins });
          })
          .catch(err => console.log(err));
      };
    

      componentDidMount() {
        this.getRefreshHistory();
      }
    

    render() {
        return (
            <div>
                
            {this.state.historyCoins.map(coin => {
          return (
            //We take the key from database that is unique..
            <div key={coin._id} className="History">
                <h1>{coin.symbol}</h1>
                {/* I think here need map with coin because it is array  */}
                <h2>{parseInt(coin.value[0])}</h2>
              
            </div>
          );
        })}

            </div>
        )
    }
}


export default History;