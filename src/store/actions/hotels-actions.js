import axios from "axios";
import { url, options } from "../../utils/api";

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
    payloadBest: res.data.filter((hotel) => {
        return hotel.recommended;
    })

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

export const removeFromFavourites = (hotelId) => {
    return {
        type: "REMOVE_FROM_FAVOURITES",
        payload: hotelId,
    }
}


// export const getuserHotels = () => {
//     return (dispatch) => {
//         dispatch({type: "GET_USER_HOTELS"});

//         axios.get('https://nodejs-mysql-it-academy.herokuapp.com/my-hotels', options)
//         .then((res)=> {
// dispatch({
//     type: "GET_USER_HOTELS_SUCCESS",
//     payload: res.data
// })
//         }).catch(() => {
//             dispatch({
//                 type:"GET_USER_HOTELS_ERROR"
//             })
//         })
//     };
// }