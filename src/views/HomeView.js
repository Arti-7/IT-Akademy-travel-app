import React from "react";
import MainContainer from "../components/MainContainer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import rates from "../utils/rates"
import axios from 'axios';
import {convertValues, sortHotels, filterData, changeCurrency} from "../displaySettings/displaySettings";

class HomeView extends React.Component {
  state = {
    hotels: [],
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
    axios
    .get('https://nodejs-mysql-it-academy.herokuapp.com/hotels')
    .then((result) => {
      this.setState({
        dataFromApi: result.data,        
      });
      this.switchSort();
    })
      
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currency !== prevState.currency) {
      this.setState(  {      
        hotels: changeCurrency(prevState,this.state.hotels,rates, this.state.currency),
        
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

export default HomeView;
