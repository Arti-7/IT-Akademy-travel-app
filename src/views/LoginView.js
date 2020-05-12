import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "../styles/RegisterView.scss";

class LoginView extends React.Component {
  login = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    for (let field of form) {
      console.log(field);
    }

    const url = "https://nodejs-mysql-it-academy.herokuapp.com/";
    const options = {
      headers: {
        "Content-type": "multipart/form-data",
      },
    };

    axios
      .post(url + "login", form, options)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="form-group loginForm mx-auto">
        <br />
        <h1 className="text-center">Login</h1>
        <form onSubmit={this.login}>
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
              <label className="ml-1">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <input
              type="submit"
              value="Login"
              className="btn btn-info mt-3 vw-100 py-2"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginView);
