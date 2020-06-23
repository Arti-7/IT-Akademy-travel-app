const initialState = {
  text: null,
  hotels: [],
  bestHotels: [],
  favourites: [],
  userHotels:[],
};

const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_TEXT":
      return { ...state, text: action.payload };
    case "GET_HOTELS_SUCCESS":
      return { ...state, hotels: action.payload, bestHotels: action.payloadBest };
    case "ADD_TO_FAVOURITES":
      return { ...state, favourites: [...state.favourites, action.payload] }; //favourites.push(action.payload)
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: [
          ...state.favourites.filter((hotel) => hotel.id !== action.payload),
        ],
      };

      // case "UNFAVOURITE":
      //   return {
      //     ...state, favourites: [...state.favourites.filter(())]
      //   }

      case "GET_USER_HOTELS_SUCCESS":
        return {
          ...state, userHotels: action.payload
        }
    default:
      return state;
  }
};

export default hotelsReducer;
