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

  // this method handles just the file upload
  // handleFileUpload = e => {
  //   console.log("The file to be uploaded is: ", e.target.files[0]);

  //   const uploadData = new FormData();
  //   // imageUrl => this name has to be the same as in the model since we pass
  //   // req.body to .create() method when creating a new thing in '/api/things/create' POST route
  //   uploadData.append("img", e.target.files[0]);

  //   // service.handleUpload(uploadData)
  //   // .then(response => {
  //   //     // console.log('response is: ', response);
  //   //     // after the console.log we can see that response carries 'secure_url' which we can use to update the state
  //   //     this.setState({ imageUrl: response.secure_url });
  //   //   })
  //   //   .catch(err => {
  //   //     console.log("Error while uploading the file: ", err);
  //   //   });
  // };

  // submit the information to the backend
  handleSubmit = e => {
    e.preventDefault();

    // const {name, price, type, id, symbol, img, description, web, history} = this.state;

    console.log("stado :", this.state);

    axios
      .post("http://localhost:5000/owncoins/add", this.state, {
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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name for the coin</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <label>Price</label>
          <input
            type="text"
            name="price"
            value={this.state.price}
            onChange={this.handleInput}
          />

          <label>Is it Minable?</label>
          <input
            type="text"
            name="type"
            value={this.state.type}
            onChange={this.handleInput}
          />
          <label>Put an ID:</label>
          <input
            type="number"
            name="id"
            value={this.state.id}
            onChange={this.handleInput}
          />
          <label>Which is your symbol?</label>
          <input
            type="text"
            name="symbol"
            value={this.state.symbol}
            onChange={this.handleInput}
          />

          {/* <label>Image:</label>
          <input type="file" onChange={this.handleFileUpload} /> */}

          <input
            type="text"
            name="img"
            value={this.state.img}
            onChange={this.handleInput}
          />
          <label>Description of the coin</label>

          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleInput}
          />

          <label>web page</label>

          <input
            type="text"
            name="web"
            value={this.state.web}
            onChange={this.handleInput}
          />

          {/* <label>File:</label>
        <input type="file"/> */}

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddOwnCoins;
