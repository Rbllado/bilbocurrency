import React, { Component } from "react";
import axios from "axios";

var uploadData;

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

    axios
      .post(`${process.env.REACT_APP_API_URL}/owncoins/add`, this.state, {
        withCredentials: true
      })
      .then(answer => {})
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

  // upload the img to cloudinary. We sent to the backend the file and there upload the img to cloudinary.
  uploadImg = e => {
    const file = e.target.files[0];

    if (file) {
      uploadData = new FormData();
      uploadData.append("img", file);
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/owncoins/image`, uploadData)
      .then(imagen => {
        this.setState({ img: imagen.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="backkground-container">
        <br />
        <div className="form-owncoin">
          {/* To take the image able to read the file */}
          <br />
          <div className="col-lg-6 push-lg-4 personal-info edit-profile">
            <h2>Add your own coin</h2>
            <br />
            <form onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Name of the coin
                </label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInput}
                    placeholder="name of your new coin"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Price of the coin
                </label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleInput}
                    placeholder="Type the price of your coin"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Is it minable?
                </label>
                <div className="col-lg-8">
                  <select
                    className="form-control"
                    name="type"
                    value={this.state.type}
                    onChange={this.handleInput}
                    id="exampleFormControlSelect2"
                  >
                    <option>-</option>
                    <option>Minable</option>
                    <option>Not minable</option>
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Put an id for your coin
                </label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="number"
                    name="id"
                    value={this.state.id}
                    onChange={this.handleInput}
                  ></input>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Which is your symbol?
                </label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    name="symbol"
                    value={this.state.symbol}
                    onChange={this.handleInput}
                  ></input>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Choose your image for your Image
                </label>
                <div className="col-lg-8">
                  <input
                    className="form-control-file"
                    type="file"
                    name="img"
                    //value={this.state.img}
                    onChange={this.uploadImg}
                  ></input>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Write your website
                </label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    name="web"
                    value={this.state.web}
                    onChange={this.handleInput}
                    placeholder="http://wwww.example.com"
                  ></input>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Description of the coin
                </label>
                <div className="col-lg-8">
                  <textarea
                    className="form-control"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleInput}
                    rows="3"
                  ></textarea>
                </div>
              </div>

              <label className="col-lg-3 col-form-label form-control-label"></label>
              <div className="col-lg-9">
                <button type="submit" className="btn btn-primary">
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddOwnCoins;
