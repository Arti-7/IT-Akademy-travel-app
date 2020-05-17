import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/TopBar.scss";
import logo from "../icons/logo.png";

class TopBar extends React.Component {
  handleClick = () => {
    this.props.history.push("login");
  };

  handleLogOutClick = () => {
    localStorage.removeItem("token");
    this.props.verifyUserStatus();
  };

  render() {
    const { isAuthorized, user } = this.props;
    console.log({ user });
    return (
      <nav className=" topContainer nav d-flex justify-content-between">
        <div className="topLogo">
          <img src={logo} style={{ height: "inherit" }} />
        </div>
        {!isAuthorized && (
          <div className="topBar">
            <Link to="/" className="nav-link active">
              Home
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
    );
  }
}

export default withRouter(TopBar);
