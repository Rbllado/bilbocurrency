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

  removeFavorite = id => {
    console.log(id);
    axios
      .post(`http://localhost:5000/favorites/remove/${id}`, null, {
        withCredentials: true
      })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(err => console.log(err));

    this.setState({
      allFavorites: this.state.allFavorites.filter(elem => {
        return elem._id !== id;
      })
    });
  };

  componentDidMount() {
    this.getFavorites();
  }

  render() {
    const { allFavorites } = this.state;
    return (
      <div className="favorite-coins">
        {allFavorites.length ? (
          allFavorites.map(favorite => {
            return (
              <div className="favorite-coin">
                <h1>{favorite.name}</h1>
                <button
                  onClick={() => {
                    this.removeFavorite(favorite._id);
                  }}
                  key={favorite._id}
                >
                  Eliminar
                </button>
              </div>
            );
          })
        ) : (
          <h2>Loading</h2>
        )}
      </div>
    );
  }
}

export default Favorites;
