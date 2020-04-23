import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView";
import HotelView from "./views/HotelView/HotelView";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/hotel/:id" component={HotelView} />
            <Route path="/" component={HomeView} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
