import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Header.scss";
import search from "../../icons/search.svg";
import data from "../../utils/data";
import "../../App";
import "../../utils/rates"

class Header extends React.Component {
  state = {
    price: 0,
    name: "",
  };

  handleSearch = (event) => {
    this.props.filterHotels(this.state.price, event.target.value.toLowerCase());
    this.setState({
      name: event.target.value.toLowerCase(),
    });
  };

  handleFilterPrice = (event) => {
    this.props.filterHotels(parseInt(event.target.value), this.state.name);
    this.setState({
      price: parseInt(event.target.value),
    });
  };

  handleConvertion = (event) => {
  this.props.convertValues(event.target.value);
  };

  render(props) {
    return (
      <div className="header">
        <div className="search-bar">
          <img src={search} />
          <input
            type="text"
            className="search-field"
            placeholder="Enter location"
            onChange={this.handleSearch}
          />
        </div>
        <div className="lower-line">
          <div className="price-bar">
            <div> &#128176;</div>
            <input
              type="text"
              className="price-field"
              placeholder="Min. price"
              onChange={this.handleFilterPrice}
            />
            {this.props.symbol}
          </div>
          <select className="converter" onChange={this.handleConvertion}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CHF">CHF</option>
            <option value="PLN">PLN</option>
          </select>
          <input
            className="tools text-muted"
            type="button"
            value={this.props.sort ? "a-z" : "z-a"}
            onClick={this.props.switchSort}
          />
        </div>
      </div>
    );
  }
}

export default Header;
