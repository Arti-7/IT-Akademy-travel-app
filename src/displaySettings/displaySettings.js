export const convertValues = (value) => {
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
return {
    value: value,
    symbol: i
}
  };

  export const sortHotels = (data, sort) => {
      let aMoreB;
      let bMoreA;
  
      if (sort) {
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
  
    export const filterData = (price,name, data) => {
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
        return filteredHotels
    };

    export const changeCurrency = (prevState, data, rates, currency) => {
        if (prevState.currency === "USD") {
          for (let i of data) {
            i.defaultPrice = JSON.parse(JSON.stringify(i.price));
          }
        }
        const hotelsNew = data.map((hotel) => {
          hotel.price = Math.round(
            parseInt(hotel.defaultPrice) * rates[currency]
          );
          return hotel;
        });
      return hotelsNew;
    }