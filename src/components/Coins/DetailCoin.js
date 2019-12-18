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

    arrMinMax.push(arrMin + (arrMin/2), arrMax +(arrMax*2));


    this.setState({ arrMinMax });
  };

  getCoin = () => {
    console.log("Heyyy", this.props.match.params);

    const id = this.props.match.params.id;
    console.log(id);

    axios
      .post(`${process.env.REACT_APP_API_URL}/coins/detail/${id}`)
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

  getHistory = () => {
    const symbol = this.state.coin.symbol;

    axios
      .post(`${process.env.REACT_APP_API_URL}/coins/history/${symbol}`)
      //   .get(`http://localhost:5000/coins/detail/5`)
      //   .headers(CMC_PRO_API_KEY = "3e18416b-942d-419a-89ab-8f8058b12944")
      .then(response => {
        // I will have all the information of a coin.

        console.log("coin", response.symbol);

        const historyCoin = response.symbol;

        this.setState({ historyCoin });
      })
      .catch(err => console.log(err));
  };

  //   send id to favorites
  sendFavorite = () => {
    const id = this.props.match.params.id;
    console.log("id de la moneda a añadir favoritos:", id);

    axios
      // to send the currentUSer to the backend
      .post(`${process.env.REACT_APP_API_URL}/favorites/${id}`, null, {
        withCredentials: true
      })
      .then(result => {
        console.log("resultado", result);
        this.setState({ isInFavorites: true });
        console.log("Boolean", this.state.isInFavorites);
      })
      .catch(err => console.log(err));
  };

  pressButton = () => {
    const symbol = this.state.coin.symbol;

    axios
      .post(`${process.env.REACT_APP_API_URL}/history/${symbol}`)
      //   .get(`http://localhost:5000/coins/detail/5`)
      //   .headers(CMC_PRO_API_KEY = "3e18416b-942d-419a-89ab-8f8058b12944")
      .then(response => {
        // I will have all the information of a coin.
        arrHistory = response.data;
        console.log(arrHistory);

        this.getMinMax();

        const historyCoin = response.data.map((value, i) => {
          return { value, time: i };
        });

        this.setState({ historyCoin });
      })
      .catch(err => console.log(err));

    btnPressed = true;
    console.log(this.historyCoin);

    console.log("Apretado");
  };

  componentDidMount() {
    this.getCoin();
    // this.setState({historyCoin: null})
  }

  render() {
    console.log("idsfhghfjkd", this.state.historyCoin);
    return (
      <div className="detail-container">
        <div className="detail-coin">
          <div>
            <img src={this.state.coin.img} alt="" />

            {btnPressed === true ? (
              <LineChart
                width={500}
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
                <YAxis
                  type="number"
                  domain={[this.state.arrMinMax]}
                />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
              </LineChart>
            ) : (
              /*{ <PieChart width={730} height={250}>
              <Pie data={this.state.historyCoin} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8"  label/>
              
          </PieChart> }*/

              null
            )}

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
          <a href={this.state.coin.web}>Link to the webpage</a>
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
