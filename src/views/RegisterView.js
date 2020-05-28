import React from "react";
import axios from "axios";
// import { withRouter } from "react-router-dom";
// import check from "../icons/check.svg";
import "../styles/RegisterView.scss";

class RegisterView extends React.Component {
  state = {
    passwordCheck: "form-control",
  };

  checkPassword = (event) => {
    let password = document.getElementById("password").value;
    let passwordRep = document.getElementById("repeatPassword").value;
    if (password.length !== 0 && password === passwordRep) {
      this.setState({ passwordCheck: "form-control is-valid" });
    } else {
      this.setState({ passwordCheck: "form-control" });
    }
  };

  register = (event) => {
    event.preventDefault(); // block all defaults
    const form = new FormData(event.target);

    const url = "https://nodejs-mysql-it-academy.herokuapp.com/";
    const options = {
      headers: {
        "Content-type": "multipart/form-data",
      },
    };
    axios
      .post(url + "Register", form, options)
      .then((response) => {
        this.props.history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="form-group registerForm mx-auto">
        <h1 className="text-center">Registration Form</h1>
        <br />
        <form onSubmit={this.register}>
          <div className="form-row">
            <div className="form-group col">
              <label className="ml-1">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                required
              />
            </div>
            <div className="form-group col">
              <label className="ml-1">Surname</label>
              <input
                type="text"
                name="surname"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label className="ml-1">Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label className="ml-1">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label className="ml-1">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className={this.state.passwordCheck}
                onChange={this.checkPassword}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label className="ml-1">Repeat Password</label>
              <input
                type="password"
                id="repeatPassword"
                className={this.state.passwordCheck}
                onChange={this.checkPassword}
                required
              />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <input
              type="submit"
              value="Register User"
              className="btn btn-info mt-3 w-25 py-2"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterView;
