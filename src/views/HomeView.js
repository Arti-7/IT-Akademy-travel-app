import React from "react";
import MainContainer from "../components/MainContainer";
import Header from "../components/Header";
import sidebar_data from "../utils/sidebar_data";
import Sidebar from "../components/Sidebar";
import rates from "../utils/rates"
import axios from 'axios';

class HomeView extends React.Component {
  state = {
    hotels: [],
    bestHotels: [],
    sort: true,
    currency: "USD",
    symbol: "$",
    searchLocation: "",
    searchPrice: 0,
    dataFromApi: [],
  };

  convertValues = (value) => {
    let i;
    switch (value) {
      case "USD":
        i = "$";
        break;
      case "EUR":
        i = "€";
        break;
      case "CHF":
        i = "₣";
        break;
      case "PLN":
        i = "zl";
        break;
      default:
        i = "USD";
    }
    this.setState({
      currency: value,
      symbol: i,
    });
  };


  filterHotels = (price, name) => {
    let filteredHotels = this.state.dataFromApi;

    if (name !== undefined) {
      filteredHotels = this.state.dataFromApi.filter((hotel) => {
        return hotel.location.toLowerCase().includes(name);
      });
    } else {
      filteredHotels = this.state.dataFromApi;
    }
    if (price > 0) {
      filteredHotels = filteredHotels.filter((hotel) => {
        return parseInt(hotel.price) >= price;
      });
    }

    this.setState({
      hotels: filteredHotels,
      searchLocation: name,
      searchPrice: price,
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

    return this.state.dataFromApi.sort((a, b) => {
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
    this.filterHotels(this.state.searchPrice, this.state.searchLocation);
  };

  componentDidMount() {
    axios.get('https://nodejs-mysql-it-academy.herokuapp.com/hotels')
    .then((res) => {
      this.setState({
        dataFromApi: res.data,        
      })
      this.switchSort();
    })
    axios.get('https://nodejs-mysql-it-academy.herokuapp.com/hotels/recommended')
    .then((rec) => {
      this.setState({
        bestHotels: rec.data,       
      })
    })

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currency !== prevState.currency) {
      if (prevState.currency == "USD") {
        for (let i of this.state.dataFromApi) {
          i.defaultPrice = JSON.parse(JSON.stringify(i.price));
        }
        for (let i of sidebar_data) {
          i.defaultPrice = JSON.parse(JSON.stringify(i.price));
        }
      }
      const hotelsNew = this.state.dataFromApi.map((hotel) => {
        hotel.price = Math.round(
          parseInt(hotel.defaultPrice) * rates[this.state.currency]
        );
        return hotel;
      });

      const sideHotelsNew = sidebar_data.map((hotel) => {
        hotel.price = Math.round(
          parseInt(hotel.defaultPrice) * rates[this.state.currency]
        );
        return hotel;
      });

      this.setState({
        hotels: hotelsNew,
        bestHotels: sideHotelsNew,
      });
      this.filterHotels(this.state.searchPrice, this.state.searchLocation);
    }
  }




  
  render() {
    return (
      <div>     
        <Header
          filterHotels={this.filterHotels}
          sort={this.state.sort}
          switchSort={this.switchSort}
          convertValues={this.convertValues}
          symbol={this.state.symbol}
        />
        <div className="MainSection">
          <Sidebar
            sidebar_data={this.state.bestHotels}
            symbol={this.state.symbol}
          />
          <React.Fragment>
          <MainContainer 
          data={this.state.hotels} 
          symbol={this.state.symbol} />
          </React.Fragment>
        </div>
      </div>
    );
  }
}
export default HomeView;
