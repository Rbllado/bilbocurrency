import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie
} from "recharts";
import { parse } from "path";

const buttonFav = document.getElementsByClassName("btn-favorite");
var btnPressed = false;
var arrHistory;

class CoinsList extends Component {
  state = {
    coin: {},
    historyCoin: [],
    arrMinMax: [],
    isInFavorites: false
  };

  getMinMax = () => {
    let copyHistoryCoin = [...arrHistory];

    const arrMin = Math.min(...copyHistoryCoin);

    const arrMax = Math.max(...copyHistoryCoin);

    const arrMinMax = [];

    arrMinMax.push(arrMin + arrMin / 2, arrMax + arrMax * 2);

    this.setState({ arrMinMax });
  };

  getCoin = () => {

    const id = this.props.match.params.id;
    console.log(id);

    axios
      .post(`${process.env.REACT_APP_API_URL}/coins/detail/${id}`)
      .then(response => {
        // I will have all the information of a coin.
        const coin = response.data;
        this.setState({ coin });
      })
      .catch(err => console.log(err));
  };

  getHistory = () => {
    const symbol = this.state.coin.symbol;

    axios
      .post(`${process.env.REACT_APP_API_URL}/coins/history/${symbol}`)
      .then(response => {
        // I will have all the history prices of a coin

        const historyCoin = response.symbol;

        this.setState({ historyCoin });
      })
      .catch(err => console.log(err));
  };

  // send id to favorites
  sendFavorite = () => {
    const id = this.props.match.params.id;

    axios
      // to send the currentUSer to the backend
      .post(`${process.env.REACT_APP_API_URL}/favorites/${id}`, null, {
        withCredentials: true
      })
      .then(result => {
        this.setState({ isInFavorites: true });
      })
      .catch(err => console.log(err));
  };

  pressButton = () => {
    const symbol = this.state.coin.symbol;

    axios
      .post(`${process.env.REACT_APP_API_URL}/history/${symbol}`)
      .then(response => {
        arrHistory = response.data;

        // To fixed to 2 decimal
        for (let i = 0; i < arrHistory.length; i++) {
          arrHistory[i] = arrHistory[i].toFixed(2);
        }

        this.getMinMax();

        const historyCoin = arrHistory.map((value, i) => {
          return { value, time: i };
        });

        this.setState({ historyCoin });
      })
      .catch(err => console.log(err));

    btnPressed = true;
  };

  componentDidMount() {
    this.getCoin();
    // Reset the chart
  }

  render() {
    return (
      <div className="detail-container">
        <div className="detail-coin">
          <div>
            <img src={this.state.coin.img} alt="" />
            <br />
            <br />

            {btnPressed === true ? (
              <LineChart
                width={400}
                height={300}
                data={this.state.historyCoin}
                /* viewBox="0 0 400 350" */
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis type="number" domain={[this.state.arrMinMax]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
              </LineChart>
            ) : /*{ <PieChart width={730} height={250}>
              <Pie data={this.state.historyCoin} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8"  label/>
              
          </PieChart> }*/

            null}

            <button
              onClick={this.pressButton}
              className="chart-btn btn btn-success"
            >
              Show Chart
            </button>
          </div>
          <h2 className="name-detail">{this.state.coin.name}</h2>
          <p className="description-detail">{this.state.coin.description}</p>
          <h3 className="price-detail">${this.state.coin.price}</h3>
          <h4 className="symbol-detail">Symbol: {this.state.coin.symbol}</h4>
          <a href={this.state.coin.web} className="web-detail">
            Link to the webpage
          </a>
          <h4 className="tags-detail">{this.state.coin.tags}</h4>

          {!this.state.isInFavorites ? (
            <button onClick={this.sendFavorite} className="btn btn-primary">
              Add to favorites
            </button>
          ) : (
            <button disabled className="btn btn-secondary">
              Already favourites
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default CoinsList;
