import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../styles/MainContainer.scss";
import Spinner from "../icons/Spinner.svg";
import Hotel from "./Hotel"

const MainContainer = (props) => {
  return (
    props.data.length > 0 ?
    <div className="main-container">
      {props.data.map((element) => {
        return <Hotel element={element} symbol={props.symbol}/>;
      }) }
    </div>
  : <div className="spinner-div"><img src={Spinner} style={{width: "500px", height: "500px"}} alt="Loading"/></div>);
};

export default MainContainer;
