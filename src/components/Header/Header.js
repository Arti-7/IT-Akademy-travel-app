import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Header.scss";

class Header extends React.Component {
  state = {};

  handleSearch = event => {
    this.props.filterHotels(event.target.value);
  };

  render() {
    return (
      <div className="header">
        <input
          type="text"
          className="search-field form-control"
          placeholder="Enter location"
          onChange={this.handleSearch}
        />
      </div>
    );
  }
}

export default Header;
