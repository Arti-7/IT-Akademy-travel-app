import React from "react";
import MainContainer from "../components/MainContainer";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import rates from "../utils/rates";
import axios from "axios";
// import { connect } from "react-redux";
// import {getHotels} from "../store/actions/hotels-actions";
import {convertValues, sortHotels, filterData, changeCurrency} from "../displaySettings/displaySettings";

class UsersHotelView extends React.Component {
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

  converter = (value) => {
    let x = convertValues(value)
    this.setState({
      currency: x.value,
      symbol: x.symbol
    })
  }



  filterHotels = (price, name) => {

    this.setState({
      hotels: filterData(price, name, this.state.dataFromApi),
      searchLocation: name,
      searchPrice: price,
    });
  };

  switchSort = () => {
    this.setState({
      sort: !this.state.sort,
      hotels: sortHotels(this.state.dataFromApi, this.state.sort),
    });
    this.filterHotels(this.state.searchPrice, this.state.searchLocation);
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    const options = {
      headers: {
        "x-access-token": token,
      },
    };

    axios
      .get("https://nodejs-mysql-it-academy.herokuapp.com/my-hotels", options)
      .then((res) => {
        this.setState({
          dataFromApi: res.data,
        });
        console.log(this.state.dataFromApi);
        this.switchSort();
        
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currency !== prevState.currency) {
      this.setState(  {      
        hotels: changeCurrency(prevState,this.state.dataFromApi,rates, this.state.currency),
      })   
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
          convertValues={this.converter}
          symbol={this.state.symbol}
        />
        <div className="MainSection">
          <Sidebar
            symbol={this.state.symbol}
            currency={this.state.currency}
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


export default UsersHotelView;
