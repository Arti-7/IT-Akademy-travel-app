import React from "react";
import axios from "axios";
import { connect } from "react-redux";

class HotelView extends React.Component {
  state = {
    hotel: {
      title: null,
      price: null,
      description: null,
      wifi: null,
      image: null,
    },
  };

  componentDidMount() {
    const API = "https://nodejs-mysql-it-academy.herokuapp.com/hotels/";
    axios
      .get(API + this.props.match.params.id)
      .then((res) => {
        this.setState({
          hotel: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { title, price, description, image, wifi } = this.state.hotel;
    return (
      <div>
        {this.props.savedText}
        <ul>
          <li>{title}</li>
          <img src={image} alt={title} />
          <li>{price}</li>
          <li>{wifi}</li>
          <li>{description}</li>
        </ul>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     savedText: state.text,
//   };
// };
export default connect()(HotelView);
