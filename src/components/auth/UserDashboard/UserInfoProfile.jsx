import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadUser } from "../../actions/authActions";

const UserInfoProfile = ({ loadUser, email, player, isAuthenticated }) => {
  useEffect(() => {
    loadUser(localstorage.getItem("token"));
  }, []);

  let playerInfo;
  if (localstorage.getItem("token") !== null) {
    playerInfo = player.authdata.user[0];
  }

  return (
    <div>
      {player ? (
        <div className="info-content">
          <div className="info-text">
            <p>{playerInfo.nickname}</p>
          </div>
          <br />
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    player: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { loadUser })(UserInfoProfile);
