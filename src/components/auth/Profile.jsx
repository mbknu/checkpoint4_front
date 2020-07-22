import React from "react";
import Logout from "./Logout";
import UserDashboard from "./UserDashboard/UserDashboard";

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <UserDashboard />
      <Logout />
    </div>
  );
};

export default Profile;
