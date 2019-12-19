import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

class History extends Component {
    state= {
        historyCoins: []
    }

    getRefreshHistory = () => {
        axios
        // .get(`${process.env.REACT_APP_API_URL}/history/updatehistory`)

          .get(`${process.env.REACT_APP_API_URL}/coins/updatehistory`)
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
              <br/>
                <h2>You have update the history of the coin</h2>
                <Link to="/coins" className="nav-link">
                    Go to coins
                  </Link>

            </div>
        )
    }
}


export default History;