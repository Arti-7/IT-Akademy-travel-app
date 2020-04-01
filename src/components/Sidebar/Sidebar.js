import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Sidebar.scss";
import sidebar_data from "../../utils/sidebar_data";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="main-sidebar">
        <p className="title font-weight-bolder">More than just hotels</p>
        {this.props.sidebar_data.map(element => {
          return (
            <div className="sidebar-hotel">
              <img src={element.image} />
              <div className="sidebar-hotel__information">
                <p className="sidebar-hotel-name font-weight-bolder">
                  {element.title}
                </p>
                <p className="location text-muted">{element.location}</p>
                <div className="price">{element.price}$</div>
              </div>
              <div className="arrow d-flex align-items-center text-muted">
                &#8250;
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Sidebar;
