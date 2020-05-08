import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/TopBar.scss";

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
    return (
      <nav className="nav">
        
        {!isAuthorized && (
          
          <div className="topBar">      
          <Link to="/" className="nav-link active">Home</Link>    
            <Link to="/register" className="nav-link active pr-1">Register</Link>
            <span className="nav-link px-1">|</span>
            <Link to="/login" className="nav-link active pl-1">Login</Link>
            </div>
        )}
        {isAuthorized && (
          <div className="topBar">
          <Link to="/" className="nav-link active">Home</Link> 
            <Link to="/add-hotel" className="nav-link active">Add Hotel</Link>
            <Link to="/" className="nav-link active" onClick={this.handleLogOutClick}>Logout</Link>
            {/* <input
              type="button"
              value="Logout"
              onClick={this.handleLogOutClick}
              className="nav-link active"
            /> */}
            <div className="nav-link disabled">{user.username}</div>
          </div>
        )}
      </nav>
    );
  }
}

export default withRouter(TopBar);
