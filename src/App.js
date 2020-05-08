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
import AddHotelView from "./views/AddHotelView"

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
            {/* <PrivateRoute 
            path="/add-hotel" 
            component={HotelView} 
              isAuthorized={this.state.isAuthorized}
            />
            <Route path="/Login" component={LoginView} />
            <Route path="/Register" component={RegisterView} />
            <Route path="/hotel/:id" component={AddHotelView} />
            <Route path="/" component={HomeView} /> */}

            <Route 
              path="/hotel/:id" 
              component={HotelView}
            />
            <Route path="/login" component={LoginView} />
            <Route path="/register" component={RegisterView} />
            <PrivateRoute 
              path="/add-hotel" 
              component={AddHotelView}
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
