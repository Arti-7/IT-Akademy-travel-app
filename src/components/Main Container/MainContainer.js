import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./MainContainer.scss";
import data from "../../utils/data";

class MainContainer extends React.Component {
  constructor() {
    super();
    //   this.sortHotels = this.sortHotels.bind(this);
    //   this.switchSort = this.switchSort.bind(this);
    this.state = {
      hotels: [],
      asc: true
    };
  }

  //   sortHotels() {

  //     let aMoreb;
  //     let bMorea;

  //     if (this.state.asc) {
  //         aMoreb = 1;
  //         bMorea = -1;
  //     } else{
  //         aMoreb = -1;
  //         bMorea = 1;
  //     }

  //       return this.props.data.sort((a,b) =>{

  // if (a.title > b.title) {
  //     return aMoreb;
  // }
  // else if (a.title < b.title) {
  //     return bMorea;
  // }
  // else {
  //     return 0;
  // }

  //       });
  //   }
  //   switchSort() {
  //     this.setState({
  //         asc: !this.state.asc,
  //         hotels: this.sortHotels()
  //     });
  //   }

  componentDidMount() {
    //   this.switchSort();
  }

  componentDidUpdate(prevProps, prevState) {
    //     this.switchSort();
    //     console.log('Previous state', prevState);
    //     console.log('Current state', this.state);
    // console.log("component not updated yet");
  }

  render() {
    return (
      <div className="main-container">
        {/* <input typr="button" value="change sorting" onClick={this.switchSort}/> */}
        {this.props.data.map(element => {
          return (
            <div className="hotel">
              <img src={element.image} />
              <div className="hotel__info">
                <p className="hotel-name">
                  {element.title} &middot;
                  <span className="font-weight-lighter">
                    {" "}
                    {element.location}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MainContainer;
