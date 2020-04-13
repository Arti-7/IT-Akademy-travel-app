import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Sidebar.scss";
import sidebar_data from "../../utils/sidebar_data";
import AddHotel from '../AddHotel/AddHotel';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="main-sidebar">
      {/* <AddHotel/> */}
        <p className="title font-weight-bolder">More than just hotels</p>
        {this.props.sidebar_data.map((element,index) => {
          return (
            <div className="sidebar-hotel" key={index}>
              <img src={element.image} />
              <div className="sidebar-hotel__information  d-flex flex-column bd-highlight mb-3">
                <p className="sidebar-hotel-name font-weight-bolder">
                  {element.title}
                </p>
                <p className="location text-muted">{element.location}</p>
                <div className="price">{element.price}{this.props.symbol}</div>
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
