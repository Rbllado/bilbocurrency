import React, { Component } from "react";
import axios from "axios";

class EditProfile extends Component {
  state = {
    name: "",
    password: "",
    newpassword: ""
  };











  handleSubmit = e => {

    e.preventDefault();

    console.log("estado :", this.state);

    axios
      .post(`${process.env.REACT_APP_API_URL}/editprofile`, this.state, {
        withCredentials: true
      })
      .then(answer => {
        // console.log('Mirar que lle');
        
      })
      .catch(err => console.log(err));

    this.setState({
      name: "",
      password:"",
      newpassword: ""
    });
  };






  render() {
    return (
      <div>
        <div class="container">
          {/* <!-- edit form column --> */}
          <div class="col-lg-12 text-lg-center">
            <h2>Edit Profile</h2>
            <br />
            <br />
          </div>
          <div class="col-lg-8 push-lg-4 personal-info">
            <form  onSubmit={this.handleSubmit}>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label">
                  Nombre
                </label>
                <div class="col-lg-9">
                  <input class="form-control" type="text" value={this.state.name} onClick={this.handleInput} />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label">
                  Password
                </label>
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="password"
                    onClick={this.handleInput}
                    value={this.state.password}
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label">
                  New password
                </label>
                <div class="col-lg-9">
                  <input class="form-control" type="password" onClick={this.handleInput} value={this.state.newpassword} />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label"></label>
                <div class="col-lg-9">
                  <input
                    type="button"
                    class="btn btn-primary"
                    value="Save Changes"
                  />
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
