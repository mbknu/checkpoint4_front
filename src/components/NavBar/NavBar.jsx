import React from "react";
import { Link } from "react-router-dom";
import AutoSpinnerNav from "./AutoSpinnerNav";
import { connect } from "react-redux";
import { login } from "../actions/authActions";
import "./navbar.css";

const liStyle = {
  textDecoration: "none",
  borderRadius: "50px",
  listStyle: "none",
};

const NavBar = ({ isAuthenticated }) => {
  return (
    <nav className="navBar">
      <Link className="a-links" style={liStyle} to="/">
        <AutoSpinnerNav />
      </Link>
      <ul className="nav-links">
        {isAuthenticated ? (
          <Link className="a-links" style={liStyle} to="/profile">
            <li>My Profile</li>
          </Link>
        ) : (
          <Link className="a-links" style={liStyle} to="/login">
            <li>Login</li>
          </Link>
        )}
        <Link className="a-links" style={liStyle} to="/battle">
          <li>Battle</li>
        </Link>
        <Link className="a-links" style={liStyle} to="/misc">
          <li>Misc</li>
        </Link>
        <Link className="a-links" style={liStyle} to="/projects">
          <li>Projects</li>
        </Link>
        <Link className="a-links" style={liStyle} to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
  };
};
export default connect(mapStateToProps, { NavBar })(NavBar);
