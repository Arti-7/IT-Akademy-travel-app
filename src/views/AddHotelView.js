import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import {url} from '../utils/api';

class AddHotelView extends React.Component {
  addHotel = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const token = localStorage.getItem('token');

    const options = {
      headers: {
        "Content-type": "multipart/form-data",
        'x-access-token' : token
      },
    };

    axios.post(url + "/hotels", form, options)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <h1>Add new hotel</h1>
        <form onSubmit={this.addHotel}>
          <label>Title</label>
          <input type="text" name="hotelTitle" required />
          <label>Image:</label>
          <input type="file" name="hotelImage" required />
          <label>Price</label>
          <input type="text" name="hotelPrice" required />
          <label>Type</label>
          <select type="select" name="hotelType" required> 
          <option selected>Normal</option>
          <option>Plus</option>
          <option>Premium</option>
          </select>
          <label>Location</label>
          <input type="text" name="hotelLocation" required />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default withRouter(AddHotelView);