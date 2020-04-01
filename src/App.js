import React from "react";
import "./App.scss";
import MainContainer from "./components/Main Container/MainContainer";
import Header from "./components/Header/Header";
import "./components/Header/Header.scss";
import data from "./utils/data";
import sidebar_data from "./utils/sidebar_data";
import Sidebar from "./components/Sidebar/Sidebar";

class App extends React.Component {
  state = {
    hotels: [],
    bestHotels: []
  };

  filterHotels = name => {
    const filteredHotels = this.state.hotels.filter(hotel => {
      return hotel.location.toLowerCase().includes(name.toLowerCase());
    });

    this.setState({
      hotels: name.length > 0 ? filteredHotels : data
    });
  };

  componentDidMount() {
    this.setState({
      hotels: data,
      bestHotels: sidebar_data
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Body">
          <Header filterHotels={this.filterHotels} />
          <div className="MainSection">
            <Sidebar sidebar_data={this.state.bestHotels} />
            <MainContainer data={this.state.hotels} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
