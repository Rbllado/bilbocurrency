import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });

    this.setState({username: "", password: ""})
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <div className="container-profile">
          {/* <!-- edit form column --> */}
          <div className="col-lg-12 text-lg-center">
            <h2>Log In</h2>
            <br />
            <br />
          </div>
          <div className="col-lg-6 push-lg-4 personal-info edit-profile">
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Username:
                </label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Password
                </label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label"></label>
                <div className="col-lg-9">
                  <button className="btn btn-primary" value="Save Changes">
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
            <p>Already have account?</p>
        <Link to={'/signup'}> Sign up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Login);
