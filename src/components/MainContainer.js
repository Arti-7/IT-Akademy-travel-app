import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../styles/MainContainer.scss";
// import data from "../../utils/data";
import { Link } from 'react-router-dom';
import { Ring } from 'react-awesome-spinners';
import Spinner from "../icons/Spinner.svg"

const MainContainer = (props) => {
  return (
    props.data.length > 0 ?
    <div className="main-container">
      {props.data.map((element) => {
        return (
          <div className="hotel" > 
            <img src={element.image} alt={element.title}/>
            <div className="hotel__info" key={element.id}>
              <Link to={"hotel/" + element.id}>
              <div className="hotel-name">{element.title}</div>
              </Link>
              <div className="location-and-price">
                <div className="text-muted">{element.location}</div>
                <div className="price-btn">{element.price}{props.symbol}</div>
              </div>
            </div>
          </div>
        );
      }) }
    </div>
  : <div className="spinner-div"><img src={Spinner} style={{width: "500px", height: "500px"}}/></div>);
};

export default MainContainer;
