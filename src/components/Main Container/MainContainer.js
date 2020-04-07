import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./MainContainer.scss";
import data from "../../utils/data";

const MainContainer = (props) => {
  return (
    <div className="main-container">
      {props.data.map((element) => {
        return (
          <div className="hotel">
            <img src={element.image} />
            <div className="hotel__info">
              <div className="hotel-name">{element.title}</div>
              <div className="location-and-price">
                <div className="text-muted">{element.location}</div>
                <div className="price-btn">{element.price}$</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainContainer;
