import React from "react";
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class RegisterView extends React.Component {

register = (event) => {
event.preventDefault();  // block all defaults

const form = new FormData(event.target);
// for (let field of form) {
//     console.log(field)
// }

const url = 'https://nodejs-mysql-it-academy.herokuapp.com/';
const options = {
    headers: {
        'Content-type': 'multipart/form-data'
    }
}

axios.post(url + 'Register', form, options)
.then(response => 
  {console.log(response);})
.catch(error => {
    console.log(error)
})

}

  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={this.register}>
          <label>Username</label>
          <input type="text" name="username" required />
          <label>Email</label>
          <input type="email" name="email" required />
          <label>Password</label>
          <input type="password" name="password" required />
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default RegisterView;
