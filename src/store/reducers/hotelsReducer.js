const initialState = {
    text: null,
    hotels: [],
};


const hotelsReducer = (state = initialState, action) => {

    switch (action.type) {
        case "SAVE_TEXT":
            return {...state, text: action.payload};
            case "SAVE_HOTELS":
                return {...state, hotels: action.payload};
            default: return state;
    }
};


export default hotelsReducer;