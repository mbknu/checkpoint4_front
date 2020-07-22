import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const logoutStyle = {
  margin: "6px",
  cursor: "pointer",
  fontweight: "700",
  color: "#ff6961",
  borderradius: "5px",
  boxshadow: "none",
  border: "none",
  outline: "none",
};

const Logout = () => {
  return (
    <Link to="/">
      <button
        classeName="btn-logout"
        style={logoutStyle}
        onClick={() => localStorage.setItem("token", null)}
      >
        Se déconnecter
      </button>
    </Link>
  );
};

export default Logout;
