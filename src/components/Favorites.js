import React, { Component } from "react";
import { render } from "@testing-library/react";
import axios from "axios";

class Favorites extends Component {
  state = {
    allFavorites: []
  };

  //   send id to favorites
  getFavorites = () => {
    axios
      // to send the currentUSer to the backend
    //   , null, { withCredentials: true }
      .get(`http://localhost:5000/favorites/`)
      .then(result => {

        console.log(result);

        const allFavorites = result.data;
        this.setState({ allFavorites });

      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getFavorites();
  }

  render() {
    return (
      <div>
        {this.state.allFavorites.map(favorite => {
          return <h1>{favorite.name}</h1>;
        })}
      </div>
    );
  }
}

export default Favorites;
