import React from "react";
import "../styles/MainContainer.scss";
import { Link } from 'react-router-dom';
import LikeButton from "./LikeButton/LikeButton"

class Hotel extends React.Component {

  render(){
    const {element,symbol} = this.props;
    return (
       <div className="hotel" > 
            <img src={element.image} alt={element.title}/>
            <div className="hotel__info" key={element.id}>
              <Link to={"hotel/" + element.id}>
              <div className="hotel-name">{element.title}</div>
              </Link>
              <div className="location-and-price">
                <div className="text-muted">{element.location}</div>
                <div className="price-btn">{element.price}{symbol}</div>
<LikeButton hotel={element}/>
              </div>
            </div>
            </div>     
    );
};
}
export default Hotel;