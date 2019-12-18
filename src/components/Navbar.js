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
          <Nav.Link href="#home"> <a className="nav-link">  Welcome : {user.username}</a></Nav.Link>
                <Nav.Link>
                    <a className="nav-link" onClick={logout}>
                     Logout
                    </a>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/coins">
                    <a className="nav-link">Coin List</a>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="nav-item" to="/owncoins/add">
                    {" "}
                    <a className="nav-link"> Add Own Coin</a>
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link to="/favorites">
                    {" "}
                    <a className="nav-link">Favorites</a>{" "}
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link to="/owncoins/">
                    {" "}
                    <a className="nav-link">Own Coin List</a>{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/editprofile/">
                    {" "}
                    <a className="nav-link">Edit profile</a>{" "}
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
                <Nav.Link>
                  <Link to="/login">
                    {" "}
                    <a className="nav-link">Login</a>{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/signup">
                    {" "}
                    <a className="nav-link">Signup</a>{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/coins">
                    {" "}
                    <a className="nav-link">CoinList</a>{" "}
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link to="/coins/updatehistory">
                    {" "}
                    <a className="nav-link">Update Hisotry</a>{" "}
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
