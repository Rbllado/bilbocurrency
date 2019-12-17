import React, { Component } from "react";
import axios from "axios";

class EditProfile extends Component {
  state = {
    username: "",
    password: "",
    newpassword: ""
  };

  // Keep the information into the state
  handleInput = e => {
    // take the value of every name and put the value of each one.
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log("estado :", this.state);

    axios
      .post(`${process.env.REACT_APP_API_URL}/editprofile`, this.state, {
        withCredentials: true
      })
      .then(answer => {
        console.log("Respuesta del backend:", answer);
        
      })
      .catch(err => console.log(err));

    this.setState({
      username: "",
      password: "",
      newpassword: ""
    });
  };

  render() {
    return (
      <div>
        <div className="container-profile">
          {/* <!-- edit form column --> */}
          <div className="col-lg-12 text-lg-center">
            <h2>Edit Profile</h2>
            <br />
            <br />
          </div>
          <div className="col-lg-6 push-lg-4 personal-info edit-profile">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Username
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInput}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Password
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInput}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  New password
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    type="password"
                    name="newpassword"
                    value={this.state.newpassword}
                    onChange={this.handleInput}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label"></label>
                <div className="col-lg-9">
                  <button
                    className="btn btn-primary"
                    value="Save Changes"
                  >
                  Save Changes</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
