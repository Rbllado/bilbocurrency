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
      .get(`${process.env.REACT_APP_API_URL}/favorites/`, {
        withCredentials: true
      })
      .then(result => {
        console.log(result);

        const allFavorites = result.data.favorites;
        this.setState({ allFavorites });
      })
      .catch(err => console.log(err));
  };

  // Remove the favorite that I press the button
  removeFavorite = id => {
    axios.post(
      `${process.env.REACT_APP_API_URL}/favorites/remove/${id}`,
      null,
      {
        withCredentials: true
      }
    );

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
      <div>
        <br />
        {allFavorites.length ? (
          allFavorites.map((favorite, key) => {
            return (
              <div
                key={key}
                className="card  favorites-cards col-md-8 col-lg-8 col-sm-12"
              >
                <br />
                <img
                  className="card-img-top favorite-logo"
                  src={favorite.img}
                  alt="Card"
                />
                <div className="card-body">
                  <h5 className="card-title">{favorite.name}</h5>
                  <h5 className="card-title">{favorite.symbol}</h5>
                  <h5 className="card-title">Euros: {favorite.price}</h5>

                  <p className="card-text description-detail">
                    {favorite.description}
                  </p>
                  <p className="card-text">
                    <button
                      onClick={() => {
                        this.removeFavorite(favorite._id);
                      }}
                      key={favorite._id}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h2>Not favorites coins</h2>
        )}
      </div>
    );
  }
}

export default Favorites;
