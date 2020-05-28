import React, {useState, useEffect} from "react";
import axios from "axios";


const getHotelData = (id, setHotel) => {
    const API = "https://nodejs-mysql-it-academy.herokuapp.com/hotels/";
    axios
      .get(API + id)
      .then((res) => {
        setHotel(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
}


const HotelView = (props) => {
const [hotel, setHotel] = useState({});

useEffect(() => {
    const {id} = props.match.params;
getHotelData(id, setHotel)
}, [])


return Object.keys(hotel).length > 0 && (
    <div>
        {hotel.title}
    </div>
)

}
export default HotelView;