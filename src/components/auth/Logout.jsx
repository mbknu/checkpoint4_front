import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const Logout = () => {
  return (
    <Link to="/">
      <button onClick={() => localStorage.setItem("token", null)}>
        Se déconnecter
      </button>
    </Link>
  );
};

export default Logout;
