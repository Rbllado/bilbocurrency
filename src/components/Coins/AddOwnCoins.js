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

    console.log("stado :", this.state);

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
      <div className="container">
        {/* To take the image able to read the file */}
        <form
          onSubmit={this.handleSubmit}
          encType="multipart/form-data"
          className="Form"
        >
          <div className="row">
            <div className="col-lg-5">
              <label className="label label-default">Name for the coin:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInput}
              />
            </div>

            <div className="col-md-5">
              <label>Price</label>
              <input
                type="text"
                name="price"
                value={this.state.price}
                onChange={this.handleInput}
              />
            </div>

            <div className="col-md-5">
              <label>Is it Minable?</label>
              <input
                type="text"
                name="type"
                value={this.state.type}
                onChange={this.handleInput}
              />
            </div>

            <div className="col-md-5">
              <label>Put an ID:</label>
              <input
                type="number"
                name="id"
                value={this.state.id}
                onChange={this.handleInput}
              />
            </div>

            <div className="col-md-5">
              <label>Which is your symbol?</label>
              <input
                type="text"
                name="symbol"
                value={this.state.symbol}
                onChange={this.handleInput}
              />
            </div>

            {/* <label>Image:</label>
          <input type="file" onChange={this.handleFileUpload} /> */}

            <div className="col-md-5">
              <input
                type="file"
                name="img"
                //value={this.state.img}
                onChange={this.uploadImg}
              />
            </div>

            <div className="col-md-5">
              <label>Description of the coin</label>

              <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleInput}
              />
            </div>

            <div className="col-md-5">
              <label>web page</label>

              <input
                type="text"
                name="web"
                value={this.state.web}
                onChange={this.handleInput}
              />
            </div>
            {/* <label>File:</label>
        <input type="file"/> */}
            <div className="col-md-12">
            <button type="button" className="btn btn-primary btn-lg">
              Submit
            </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddOwnCoins;
