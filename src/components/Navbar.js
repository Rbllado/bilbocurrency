import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      //style={{ borderRadius: "5px", padding: "20px", background: "#686de0" }}
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              
              
              {/* 
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>

               */}


              {isLoggedin ? (
                <div className="navbar-wrap">
                  <li className="nav-item">
                    <span>
                      <p>username: {user.username}</p>
                    </span>
                    <span>
                      <a className="nav-link" onClick={logout}>Logout</a>
                    </span>
                  </li>

                  <li>
                    <Link className="nav-item" to="/owncoins/add">
                      {" "}
                      <a className="nav-link"> Add Own Coin</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/coins">
                      {" "}
                      <a className="nav-link">Coin List</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/favorites">
                      {" "}
                      <a className="nav-link">Favorites</a>{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/owncoins/">
                      {" "}
                      <a className="nav-link">Own Coin List</a>{" "}
                    </Link>
                  </li>
                </div>
              ) : (
                <div className="navbar-wrap">
                  <li className="nav-item">
                  <Link to="/login">
                    {" "}
                    <a className="nav-link">Login</a>{" "}
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/signup">
                    {" "}
                    <a className="nav-link">Signup</a>{" "}
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/coins">
                    {" "}
                    <a className="nav-link">CoinList</a>{" "}
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/coins/updateHistory">
                    {" "}
                    <a className="nav-link">Update Hisotry</a>{" "}
                  </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </nav>





        {/* {isLoggedin ? (
          <div>
            <p>username: {user.username}</p>
            <button onClick={logout}>Logout</button>
            <Link to="/owncoins/add">
              {" "}
              <button> Add Own Coin</button>
            </Link>
            <Link to="/coins">
              {" "}
              <button>Coin List</button>
            </Link>
            <Link to="/favorites">
              {" "}
              <button>Favorites</button>{" "}
            </Link>
            <Link to="/owncoins/">
              {" "}
              <button>Own Coin List</button>{" "}
            </Link>
          </div>
        ) : (
          <div className="navbar-wrap">
            <Link to="/login">
              {" "}
              <button>Login</button>{" "}
            </Link>
            <br />
            <Link to="/signup">
              {" "}
              <button>Signup</button>{" "}
            </Link>
            <Link to="/coins">
              {" "}
              <button>CoinList</button>{" "}
            </Link>
            <Link to="/coins/updateHistory">
              {" "}
              <button>Update Hisotry</button>{" "}
            </Link>
          </div>
        )} */}
      </div>
    );
  }
}

export default withAuth(Navbar);
