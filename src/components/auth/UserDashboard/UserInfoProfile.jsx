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
          <div className="info-text">
            {player && (
              <div className="info-user">
                <p>
                  <span
                    style={{
                      textDecoration: "underline #ff6961",
                      color: "#ff6961",
                    }}
                  >
                    Email :
                  </span>{" "}
                  {player.email}{" "}
                </p>
                <p>
                  <span
                    style={{
                      textDecoration: "underline #ff6961",
                      color: "#ff6961",
                    }}
                  >
                    Nickname :
                  </span>{" "}
                  {player.nickname}
                </p>
                <p>
                  <span
                    style={{
                      textDecoration: "underline #ff6961",
                      color: "#ff6961",
                    }}
                  >
                    Prénom :
                  </span>{" "}
                  {player.firstname}
                </p>
                <p>
                  <span
                    style={{
                      textDecoration: "underline #ff6961",
                      color: "#ff6961",
                    }}
                  >
                    Nom :
                  </span>{" "}
                  {player.lastname}{" "}
                </p>
                <p>
                  <span
                    style={{
                      textDecoration: "underline #ff6961",
                      color: "#ff6961",
                    }}
                  >
                    Team :
                  </span>{" "}
                  {player.team_id}{" "}
                </p>
              </div>
            )}
          </div>
          <br />
        </div>
      ) : (
        <p>Oops something went wrong...</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    player: state.auth.user && state.auth.user.result[0],
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { loadUser })(UserInfoProfile);
