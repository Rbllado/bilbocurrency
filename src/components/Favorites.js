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
      .get(`http://localhost:5000/favorites/`, { withCredentials: true })
      .then(result => {
        console.log(result);

        const allFavorites = result.data.favorites;
        this.setState({ allFavorites });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getFavorites();
  }

  render() {
    const { allFavorites } = this.state;
    return (
      <div>
        {allFavorites.length
          ? allFavorites.map(favorite => {
              return <h1>{favorite.name}</h1>;
            })
          : <h2>Heyyy</h2>}
      </div>
    );
  }
}

export default Favorites;
