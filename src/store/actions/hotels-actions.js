import axios from "axios";

export const saveText = (text) => {
    return {
        type: 'SAVE_TEXT',
        payload: text
    };
}


export const saveHotels = (hotels) => {
    return {
        type: "SAVE_HOTELS",
        payload: hotels,
    }
}

export const getHotels = () => {
    return (dispatch) => {
dispatch({type: 'GET_HOTELS'})

axios.get('https://nodejs-mysql-it-academy.herokuapp.com/hotels')
    .then((res) => {
dispatch({
    type: "GET_HOTELS_SUCCESS",
    payload: res.data,

})
})

.catch(() => {
    dispatch({
       type: "GET_HOTELS_ERROR"
    })
})
    //   this.setState({
    //     dataFromApi: res.data,        
    //   });
    //   this.switchSort();
    // })

    // }
}}


export const addToFavourites = (hotel) => {
    return {
        type: "ADD_TO_FAVOURITES",
        payload: hotel
    }
}