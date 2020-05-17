const initialState = {
    text: null,
    hotels: [],
    favourites: [],
};


const hotelsReducer = (state = initialState, action) => {

    switch (action.type) {
        case "SAVE_TEXT":
            return {...state, text: action.payload};
            case "GET_HOTELS_SUCCESS":
                return {...state, hotels: action.payload};
                case "ADD_TO_FAVOURITES":
                return {...state, favourites: [...state.favourites, action.payload]} //favourites.push(action.payload)
            default: return state;
    }
};


export default hotelsReducer;