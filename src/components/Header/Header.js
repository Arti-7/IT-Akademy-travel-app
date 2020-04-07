import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Header.scss";
import search from "../../icons/search.svg";
import data from "../../utils/data";

class Header extends React.Component {
  state = {
    x: 0,
    y: "",
  };

  handleSearch = event => {
    this.props.filterHotels(this.state.x, event.target.value.toLowerCase());
    this.setState({
      y: event.target.value.toLowerCase(),
    })
  };

  handleFilterPrice = event => {
    this.props.filterHotels(parseInt(event.target.value), this.state.y); 
   this.setState({
      x: parseInt(event.target.value),
    })
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
          <div>	&#128176;</div>
          <input
            type="text"
            className="price-field"
            placeholder="Min. price"
            onChange={this.handleFilterPrice}         
          />$
        </div>
            <input className="tools text-muted" type="button" value={this.props.sort ? 'a-z' : 'z-a'} onClick={this.props.switchSort} />
            </div>
        </div>
    );
  }
}

export default Header;
