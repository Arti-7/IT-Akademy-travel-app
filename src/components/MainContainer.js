import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../styles/MainContainer.scss";
// import data from "../../utils/data";
import { Link } from 'react-router-dom';
import { Ring } from 'react-awesome-spinners';
import Spinner from "../icons/Spinner.svg";
import Hotel from "./Hotel"

const MainContainer = (props) => {
  return (
    props.data.length > 0 ?
    <div className="main-container">
      {props.data.map((element) => {
        return Hotel(element,props);
      }) }
    </div>
  : <div className="spinner-div"><img src={Spinner} style={{width: "500px", height: "500px"}}/></div>);
};

export default MainContainer;
