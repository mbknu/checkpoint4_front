import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadUser } from "../../actions/authActions";

const UserInfoProfile = ({ loadUser, isAuthenticated, player }) => {
  useEffect(() => {
    loadUser(localStorage.getItem("token"));
  }, []);
  return (
    <div>
      {isAuthenticated ? (
        <div className="info-content">
          <div className="info-text">{player && <p>{player.nickname}</p>}</div>
          <br />
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    player: state.auth.user && state.auth.user.result[0],
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { loadUser })(UserInfoProfile);
