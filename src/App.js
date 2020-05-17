import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeView from "./views/HomeView";
import HotelView from "./views/HotelView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import TopBar from "./components/TopBar";
import axios from 'axios';
import {url} from "./utils/api";
import PrivateRoute from './PrivateRoute';
import AddHotelView from "./views/AddHotelView";
import UsersHotelView from "./views/UsersHotelView";
import Contacts from "./views/Contacts"

class App extends React.Component {

state = {
  user: null,
  isAuthorized: false
};


verifyUserStatus = () => {

  const token = localStorage.getItem('token');

const options = {
headers : {
  "x-access-token": token
}
};

if (token && token.length > 0) {
  axios
    .get(`${url}/users/me`, options)
    .then((response) => {
      this.setState({
        user: response.data,
        isAuthorized: true
      })
      console.log(this.state.user)
      console.log(this.state.isAuthorized)
    })

.catch(error => {console.log(error)});
}
else {
  this.setState({
    user: null,
    isAuthorized: false
  })
}
}

componentDidMount(){
  this.verifyUserStatus();
}

  render() {
    console.log(this.state.isAuthorized)
    return (
      <div className="App">
        <Router>
        <TopBar 
        isAuthorized={this.state.isAuthorized} 
        user={this.state.user}
        verifyUserStatus={this.verifyUserStatus}/>
          <Switch>

            <Route 
              path="/hotel/:id" 
              component={HotelView}
            />
            <Route path="/login" component={LoginView} />
            <Route path="/register" component={RegisterView} />
            <Route path="/contacts" component={Contacts} />
            <PrivateRoute 
              path="/add-hotel" 
              component={AddHotelView}
              isAuthorized={this.state.isAuthorized}
            />
                        <PrivateRoute 
              path="/my-hotels" 
              component={UsersHotelView}
              user={this.state.user}
              isAuthorized={this.state.isAuthorized}
            />
            <Route path="/" component={HomeView} />

          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
