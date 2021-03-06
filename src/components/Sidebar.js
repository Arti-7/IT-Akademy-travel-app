import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../styles/Sidebar.scss";
import Modal from "./Modal";
import Spinner from "../icons/Spinner.svg";
import {connect} from "react-redux";
import rates from "../utils/rates";

class Sidebar extends React.Component {
  state = {
    modalOpen: false,
  };

  toggleModal = () => {
    this.setState((state) => ({ modalOpen: !state.modalOpen }));
  };

 

  render() {
    return (
      this.props.bestHotels.length > 0 ? 
      <div className="main-sidebar">
        <p className="title font-weight-bolder">More than just hotels</p>

        {this.props.bestHotels.map((element, index) => {
          return (
            <div className="sidebar-hotel" key={index}>
              <img src={element.image} alt={element.name}/>
              <div className="sidebar-hotel__information  d-flex flex-column bd-highlight mb-3">
                <p className="sidebar-hotel-name font-weight-bolder">
                  {element.title}
                </p>
                <p className="location text-muted">{element.location}</p>
                <div className="price">
                {Math.round(parseInt(element.price) * rates[this.props.currency])}
                  {this.props.symbol}
                </div>
              </div>
              <div className="arrow d-flex align-items-center text-muted">
                &#8250;
              </div>
            </div>
          );
        })}

        {!this.state.modalOpen && (
          <div className="add-btn">
            <button
              className="btn btn-primary"
              style={{ width: "50%" }}
              onClick={this.toggleModal}
              hidden={this.modalOpen}
            >
              Add Hotel
            </button>
          </div>
        )}
        {this.state.modalOpen && <Modal onClose={this.toggleModal}></Modal>}
      </div>
     : <div className="spinner-side"><img src={Spinner} style={{width: "300px"}} alt="Loading"/></div>);
  }
}
const mapStateToProps = (state) => {
  return {
    bestHotels: state.bestHotels
  } 
  }

export default connect(mapStateToProps)(Sidebar);
