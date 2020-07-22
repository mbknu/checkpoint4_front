import React from "react";
import Logout from "./Logout";
import UserDashboard from "./UserDashboard/UserDashboard";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./profile.css";

const Profile = ({ isAuthenticated }) => {
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <div classeName="title-profile">
            <h1 classeName="title-profile-text">Profile</h1>
          </div>
          <Logout />{" "}
        </div>
      ) : (
        <Redirect to="/login"></Redirect>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
  };
};
export default connect(mapStateToProps, { Profile })(Profile);
