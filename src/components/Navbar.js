import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import {
  Bootstrap,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

const a = document.getElementById("navbarNavDropdown");

class Navbar1 extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;

    return (
      <div>
        <Navbar bg="light" expand="lg">
          {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {isLoggedin ? (
              <Nav className="mr-auto">
                {/* <Nav.Link href="#home"> <img src="/images/logo.jpg" className="logo-footer" alt=""/></Nav.Link> */}
                <Nav.Link href="#" className="nav-link">
                <Link to="/" className="nav-link">
                    Bilbocurrency
                  </Link>
                </Nav.Link>

                <Nav.Link href="#home" className="nav-link">
                  <Link to="/" className="nav-link">
                    Welcome : {user.username}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/" className="nav-link" onClick={logout}>
                    Logout
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/coins" className="nav-link">
                    Coin List
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="nav-link" to="/owncoins/add">
                    Add Own Coin
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link to="/favorites" className="nav-link">
                    Favorites
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link to="/owncoins/" className="nav-link">
                    Own Coin List
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/editprofile/" className="nav-link">
                    Edit profile
                  </Link>
                </Nav.Link>

                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item></NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            ) : (
              <Nav className="mr-auto">
                {/* <Nav.Link href="#home" > <img className="nav-link" src="/images/logo.jpg" className="logo-footer" alt=""/></Nav.Link> */}
                <Nav.Link href="#home">
                  {" "}
                  <Link to="/" className="nav-link">
                    Bilbocurrency
                  </Link>{" "}
                </Nav.Link>

                <Nav.Link>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/signup" className="nav-link">
                    Signup
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/coins" className="nav-link">
                    CoinList
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  {/* will go to listcoin  --> /updatehistory*/}
                  <Link to="/coins/updatehistory" className="nav-link">
                    Update History
                  </Link>
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withAuth(Navbar1);
