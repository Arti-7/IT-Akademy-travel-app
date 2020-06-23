import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/TopBar.scss";
import logo from "../icons/logo.png";
import FavNumber from './FavNumber';

class TopBar extends React.Component {

state = {
  handleScroll: this.handleScroll.bind(this)
}

handleScroll(event) {
  const def = document.getElementById('cont').offsetTop;
  const topContainer = document.getElementById('cont');
  const style = topContainer.style;

  if(window.pageYOffset > def)
            {
  style.position = "fixed";
  style.top = "0%";
  style.width = "inherit";
  style.alignSelf = "center";
  style.borderTopLeftRadius = "30px";
  style.borderTopRightRadius = "30px";
  style.backgroundColor = "white";
  style.paddingLeft = "inherit";
  style.paddingRight = "inherit";
            }
   else{
    style.position = "static";
    style.top = void 0;
    style.width = "100%";
    style.alignSelf = void 0;
    style.borderTopLeftRadius = void 0;
    style.borderTopRightRadius = void 0;
    style.backgroundColor = "white";
    style.paddingLeft = 0;
  style.paddingRight = 0;
    }
};


  handleClick = () => {
    this.props.history.push("login");
  };

  handleLogOutClick = () => {
    localStorage.removeItem("token");
    this.props.verifyUserStatus();
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };


  render() {
    const { isAuthorized, user } = this.props;
    console.log({ user });
    return (
      <div id="cont">
      <nav className=" topContainer nav d-flex justify-content-between" id="top">
        <div className="topLogo">
          <img src={logo} style={{ height: "inherit" }} alt="Best Travels"/>
        </div>
        <div></div>
        {!isAuthorized && (
          <div className="topBar">
            <Link to="/" className="nav-link active">
              Home
            </Link>
            <Link to="/favourite" className="nav-link active">
              Favourites List
            </Link>
            <Link to="/contacts" className="nav-link active">
              Contact Us
            </Link>
            <Link to="/register" className="nav-link active pr-1">
              Register
            </Link>
            <span className="nav-link px-1">|</span>
            <Link to="/login" className="nav-link active pl-1">
              Login
            </Link>
          </div>
        )}
        {isAuthorized && (
          <div className="topBar">
            <Link to="/" className="nav-link active">
              Home
            </Link>
            <Link to="/contacts" className="nav-link active">
              Contact Us
            </Link>
            <Link to="/favourite" className="nav-link active">
              Favourites List (<FavNumber/>)
            </Link>
            <Link to="/add-hotel" className="nav-link active">
              Add Hotel
            </Link>
            <Link to="/my-hotels" className="nav-link active">
              My Hotels
            </Link>
            <Link
              to="/"
              className="nav-link active"
              onClick={this.handleLogOutClick}
            >
              Logout
            </Link>
            <div className="nav-link disabled">{user.username}</div>
          </div>
        )}
      </nav>
      </div>
    );
  }
}

export default withRouter(TopBar);
