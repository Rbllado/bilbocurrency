import React, { Component } from "react";
import axios from "axios";
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


var btnPressed = false;
var arrhistory;

class History extends Component {
  state = {
    historyCoins: [],
    copyhistoryCoins: [],
    arrMinMax: []
  };

  getRefreshHistory = () => {
    axios
      // .get(`${process.env.REACT_APP_API_URL}/history/updatehistory`)

      .get(`${process.env.REACT_APP_API_URL}/coins/updatehistory`)
      //   .headers(CMC_PRO_API_KEY = "3e18416b-942d-419a-89ab-8f8058b12944")
      .then(response => {
        console.log(response);

        const historyCoins = response.data;

        this.setState({ copyHistoryCoin: historyCoins });
      })
      .catch(err => console.log(err));
  };


  getMinMax = () => {

    let copyHistoryCoin = [...arrhistory];

    const arrMin = Math.min(...copyHistoryCoin);

    const arrMax = Math.max(...copyHistoryCoin);

    const arrMinMax = [];

    arrMinMax.push(arrMin + arrMin / 2, arrMax + arrMax * 2);

    this.setState({ arrMinMax });
  };



  pressButton = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/history`)
      .then(response => {
       
        
        arrhistory = response.data;
        
        console.log('arrhistory', arrhistory);
        
        
      
        // To fixed to 2 decimal
        // for (let i = 0; i < arrhistory.length; i++) {
        //   // console.log(arrHistory[0].value[i]);
        //   arrhistory[i].value = arrhistory[i].value.toFixed(2);
        // }


        this.getMinMax();

        const historyCoin = arrhistory.map((value, i) => {
          return { value, time: i };
        });

        console.log('histor', historyCoin);
        

        this.setState({ historyCoin});
      })

      .catch(err => console.log(err));

    btnPressed = true;
  };


  componentDidMount() {
    this.getRefreshHistory();
    this.pressButton();
  }

  render() {
    return (

      <div>

      {
        
        
        this.state.historyCoins.map((coin) => {
          return (
            //We take the key from database that is unique..
            <div key={coin._id} className="History">

              <p>{coin.symbol}</p>
              <p>{coin.value}</p>

            {(!this.state.historyCoins) ? (
              
              <LineChart
                width={400}
                height={300}
                data={coin}
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
          );
        })}


      </div>


    )
  }
}

export default History;
