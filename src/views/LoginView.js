import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

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

    axios.post(url + "login", form, options)
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
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.login}>
          <label>Username</label>
          <input type="text" name="username" required />
          <label>Password:</label>
          <input type="password" name="password" required />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default withRouter(LoginView);
