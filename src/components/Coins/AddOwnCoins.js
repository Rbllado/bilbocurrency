import React, { Component } from "react";
import axios from "axios";

class AddOwnCoins extends Component {
  state = {
    // ownCoins: []
    name: "",
    price: "",
    type: "",
    id: 0,
    symbol: "",
    img: "",
    description: "",
    web: ""
  };

  // Keep the information into the state
  handleInput = e => {
    // take the value of every name and put the value of each one.
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  // submit the information to the backend
  handleSubmit = e => {
    e.preventDefault();
    // const {name, price, type, id, symbol, img, description, web, history} = this.state;

    console.log("estado :", this.state);

    axios
      .post(`${process.env.REACT_APP_API_URL}/owncoins/add`, this.state, {
        withCredentials: true
      })
      .then(answer => {
        console.log("Answer post in add coins: ", answer);
      })
      .catch(err => console.log(err));

    this.setState({
      name: "",
      price: "",
      type: "",
      id: 0,
      symbol: "",
      img: "",
      description: "",
      web: ""
    });
  };

  uploadImg = e => {
    // console.log("target: ", e.target.files[0]);

    // const file = e.target.files[0];
    // console.log("File:",file);

    // const uploadData = new FormData();
    // // img the same from the backend and into the file const.
    // uploadData.append("img", file);

    const file = e.target.files[0];
    console.log(file);

    const uploadData = new FormData();
    uploadData.append("img", file);

    console.log("I send this one:", uploadData);

    axios
      .post(`${process.env.REACT_APP_API_URL}/owncoins/image`, uploadData)
      .then(imagen => {
        // const img = imagen.data;
        console.log("image", imagen);

        this.setState({ imagen });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="backkground-container">
        <br/>
        <div className="all-form">
          <div className="container-owncoin">
            {/* To take the image able to read the file */}
            <br />
            <form onSubmit={this.handleSubmit} encType="multipart/form-data">
              <div className="form-group">
                <h4 htmlfor="exampleFormControlInput1">Name of the coin</h4>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInput}
                  placeholder="name of your new coin"
                />
              </div>
              <div className="form-group">
                <h4 htmlFor="exampleFormControlInput1">Price of the coin</h4>
                <input
                  className="form-control"
                  type="text"
                  name="price"
                  value={this.state.price}
                  onChange={this.handleInput}
                  placeholder="Type the price of your coin"
                />
              </div>
              <div className="form-group">
                <h4 htmlFor="exampleFormControlSelect1">Is it minable?</h4>
                <select
                  className="form-control"
                  name="type"
                  value={this.state.type}
                  onChange={this.handleInput}
                  id="exampleFormControlSelect2"
                >
                  <option>Minable</option>
                  <option>Not minable</option>
                </select>
              </div>

              <div className="form-group">
                <h4 htmlFor="id1">Put an id for your coin</h4>
                <input
                  className="form-control"
                  type="number"
                  name="id"
                  value={this.state.id}
                  onChange={this.handleInput}
                ></input>
              </div>

              <div className="form-group">
                <h4 htmlfor="symbol">Which is your symbol?</h4>
                <input
                  className="form-control"
                  type="text"
                  name="symbol"
                  value={this.state.symbol}
                  onChange={this.handleInput}
                ></input>
              </div>

              <div className="form-group">
                <h4 htmlFor="symbol">Choose your image for your Image</h4>
                <input
                  className="form-control-file"
                  type="file"
                  name="img"
                  //value={this.state.img}
                  onChange={this.uploadImg}
                ></input>
              </div>

              <div className="form-group">
                <h4 htmlFor="symbol">Write your website</h4>
                <input
                  className="form-control"
                  type="text"
                  name="web"
                  value={this.state.web}
                  onChange={this.handleInput}
                  placeholder="http://wwww.example.com"
                ></input>
              </div>

              <div className="form-group">
                <h4 htmlFor="exampleFormControlTextarea1">
                  Description of the coin
                </h4>
                <textarea
                  className="form-control"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleInput}
                  rows="3"
                ></textarea>
                <br />
                <div className="col-md-12">
                  <button type="button" className="btn btn-primary btn-lg">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddOwnCoins;
