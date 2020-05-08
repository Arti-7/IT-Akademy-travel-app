import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React from "react";
import "../styles/Modal.scss";

export default class Modal extends React.Component {
  state = {
    titie: null,
    image: null,
    price: null,
    type: "Normal",
    location: null,
  };

  setValue = (property, value) => {
    this.setState({
      [property]: value,
    });
  };

  addNewHotel = () => {
    const body = {
      title: this.state.title,
      image: this.state.image,
      price: this.state.price,
      type: this.state.type,
      location: this.state.location,
    };
    axios
      .post("https://nodejs-mysql-it-academy.herokuapp.com/add-hotel", body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  render() {
    return (
      <div className="add-container">
        {this.state.title}
        <form className="add-form">
          <div className="option">
            <input
              className="form-control add-input"
              type="text"
              placeholder="Title"
              onChange={(event) => {
                this.setValue("title", event.target.value);
              }}
            />
          </div>
          <div className="option">
            <input
              className="form-control add-input"
              type="text"
              placeholder="image"
              onChange={(event) => {
                this.setValue("image", event.target.value);
              }}
            />
          </div>
          <div className="option">
            <input
              className="form-control"
              style={{ width: "49%" }}
              type="text"
              placeholder="Price"
              onChange={(event) => {
                this.setValue("price", event.target.value);
              }}
            />
            <select
              className="form-control"
              style={{ width: "49%" }}
              onChange={(event) => {
                this.setValue("type", event.target.value);
              }}
            >
              <option>normal</option>
              <option>plus</option>
              <option>premium</option>
            </select>
          </div>
          <div className="option">
            {" "}
            <input
              className="form-control add-input"
              type="text"
              placeholder="Location"
              onChange={(event) => {
                this.setValue("location", event.target.value);
              }}
            />
          </div>
          <div className="add-buttons">
            <input
              className="btn btn-primary"
              style={{ width: "100px" }}
              type="button"
              value="Submit"
              onClick={this.addNewHotel}
            />
            <button
              className="btn btn-secondary"
              style={{ width: "100px" }}
              onClick={this.props.onClose}
            >
              Close
            </button>
          </div>
          {this.props.children}
        </form>
      </div>
    );
  }
}
