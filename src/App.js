// import React from "react";
// import "./App.scss";
// import MainContainer from "./components/Main Container/MainContainer";
// import Header from "./components/Header/Header";
// import "./components/Header/Header.scss";
// import data from "./utils/data";
// import sidebar_data from "./utils/sidebar_data";
// import Sidebar from "./components/Sidebar/Sidebar";
// import rates from "./utils/rates";
// import axios from 'axios';

// class App extends React.Component {
//   state = {
//     hotels: [],
//     bestHotels: [],
//     sort: true,
//     currency: "USD",
//    // dataFromApi: null,
//   };

//   convertValues = (value) => {
// this.setState({
//   currency: value,
// })
//   };

//   filterHotels = (price, name) => {
//     let filteredHotels = data; // и тут
//     if (name !== undefined) {
//       filteredHotels = data.filter((hotel) => {
//         return hotel.location.toLowerCase().includes(name);
//       }); // тут тоже после равно
//     }
//     else {filteredHotels = data;} // тут было this state
//     if (price > 0) {
//       filteredHotels = filteredHotels.filter((hotel) => {
//         return parseInt(hotel.price) >= price;
//       });
//     }

//     this.setState({
//       hotels: filteredHotels,
//     });
//   };

//   sortHotels = () => {
//     let aMoreB;
//     let bMoreA;

//     if (this.state.sort) {
//       aMoreB = 1;
//       bMoreA = -1;
//     } else {
//       aMoreB = -1;
//       bMoreA = 1;
//     }

//     return this.state.data.sort((a, b) => {
//       if (a.title > b.title) {
//         return aMoreB;
//       } else if (b.title > a.title) {
//         return bMoreA;
//       } else {
//         return 0;
//       }
//     });
//   };

//   switchSort = () => {
//     this.setState({
//       sort: !this.state.sort,
//       hotels: this.sortHotels(),
//     });
//   };

//   componentDidMount() {
// // axios.get('https://nodejs-mysql-it-academy.herokuapp.com/hotels').then((res) => {

// // this.setState({
// //  dataFromApi: res.data,
// // })
// this.switchSort();
// // }
// // )
//     this.setState({
//       bestHotels: sidebar_data,
//     });

//     // setTimeout(() => {
//     //   this.setState({
//     //     sort: false
//     // })

//     //   this.switchSort();
//     // }, 3000);
//   }

//   componentDidUpdate (prevProps, prevState) {
//     if (this.state.currency !== prevState.currency){
//  const dataCopy = JSON.parse(JSON.stringify(data))
//       const hotelsNew = dataCopy.map((hotel) => {
//         hotel.price = Math.round(parseInt(hotel.price)*rates[this.state.currency]);
//         return hotel;
//       });
//       this.setState({
//         hotels: hotelsNew
//       })
// };

// }

//   render() {
//     return (
//       <div className="App">
//         <Header
//           filterHotels={this.filterHotels}
//           sort={this.state.sort}
//             switchSort={this.switchSort}
//             convertValues={this.convertValues}
//         />
//         <div className="MainSection">
//           <Sidebar sidebar_data={this.state.bestHotels} />
//           <MainContainer
//             data={this.state.hotels}

//           />
//         </div>
//       </div>
//     );
//   }
// }
// export default App;

import React from "react";
import "./App.scss";
import MainContainer from "./components/Main Container/MainContainer";
import Header from "./components/Header/Header";
import "./components/Header/Header.scss";
import data from "./utils/data";
import sidebar_data from "./utils/sidebar_data";
import Sidebar from "./components/Sidebar/Sidebar";
import rates from "./utils/rates";

class App extends React.Component {
  state = {
    hotels: [],
    bestHotels: [],
    sort: true,
    currency: "USD",
    symbol: "$",
    searchLocation: "",
    searchPrice: 0,
  };

  convertValues = (value) => {
    let i;
    switch (value) {
      case "USD": i = "$";break;
      case "EUR": i = "€"; break;
      case "CHF": i = "₣"; break;
      case "PLN": i = "zl"; break;
      default: i = "USD";
    }
    this.setState ({
      currency: value,
      symbol: i,
    })
    // const dataCopy = JSON.parse(JSON.stringify(data));
    // const hotelsNew = dataCopy.map((hotel) => {
    //   hotel.price = Math.round(parseInt(hotel.price) * rates[value])
    //   return hotel
    // });

    // this.setState({
    //   hotels: hotelsNew
    // });
  };

  filterHotels = (price, name) => {
  //  const dataConverted = JSON.parse(JSON.stringify(data));

  //   for (let i of data) {
  //     i.price = Math.round(i.price * rates[this.state.currency]);
  //   }
   let filteredHotels = data;

    if (name !== undefined) {
      filteredHotels = data.filter((hotel) => {
        return hotel.location.toLowerCase().includes(name);
      });
    } else {
      filteredHotels = data;
    }
    if (price > 0) {
      filteredHotels = filteredHotels.filter((hotel) => {
        return parseInt(hotel.price) >= price;
      });
    }

    this.setState({
      hotels: filteredHotels,
      searchLocation: name,
      searchPrice: price
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
    this.filterHotels(this.state.searchPrice, this.state.searchLocation)
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

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currency !== prevState.currency) {
      if (prevState.currency == "USD") {
        for (let i of data) {
          i.defaultPrice = JSON.parse(JSON.stringify(i.price));
        }
        for (let i of sidebar_data) {
          i.defaultPrice = JSON.parse(JSON.stringify(i.price));
        }
      }
      const hotelsNew = data.map((hotel) => {
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
        bestHotels: sideHotelsNew
      });
      this.filterHotels(this.state.searchPrice, this.state.searchLocation)
      
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          filterHotels={this.filterHotels}
          sort={this.state.sort}
          switchSort={this.switchSort}
          convertValues={this.convertValues}
          symbol={this.state.symbol}
        />
        <div className="MainSection">
          <Sidebar sidebar_data={this.state.bestHotels} symbol={this.state.symbol}/>
          <MainContainer data={this.state.hotels} symbol={this.state.symbol} />
        </div>
      </div>
    );
  }
}
export default App;
