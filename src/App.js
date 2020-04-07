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
    bestHotels: [],
    sort: true,
  };

  filterHotels = (price, name) => {
    let filteredHotels = data;
    if (name !== undefined) {
      filteredHotels = data.filter((hotel) => {
        return hotel.location.toLowerCase().includes(name);
      });
    } 
    else {filteredHotels = data;}
    if (price > 0) {
      filteredHotels = filteredHotels.filter((hotel) => {
        return parseInt(hotel.price) >= price;
      });
    }

    this.setState({
      hotels: filteredHotels,
    });
  };

  sortHotels = () => {
    let aMoreB;
    let bMoreA;

    if (this.state.sort) {
      aMoreB = 1;
      bMoreA = -1;
    } else {
      aMoreB = -1;
      bMoreA = 1;
    }

    return data.sort((a, b) => {
      if (a.title > b.title) {
        return aMoreB;
      } else if (b.title > a.title) {
        return bMoreA;
      } else {
        return 0;
      }
    });
  };

  switchSort = () => {
    this.setState({
      sort: !this.state.sort,
      hotels: this.sortHotels(),
    });
  };

  componentDidMount() {
    this.switchSort();
    this.setState({
      bestHotels: sidebar_data,
    });

    // setTimeout(() => {
    //   this.setState({
    //     sort: false
    // })

    //   this.switchSort();
    // }, 3000);
  }

  render() {
    return (
      <div className="App">
        <Header
          filterHotels={this.filterHotels}   
          sort={this.state.sort}
            switchSort={this.switchSort}      
        />
        <div className="MainSection">
          <Sidebar sidebar_data={this.state.bestHotels} />
          <MainContainer
            data={this.state.hotels}
            
          />
        </div>
      </div>
    );
  }
} 
export default App;
