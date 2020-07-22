import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../actions/authActions";
import { Redirect } from "react-router-dom";
import "./login.css";

const Login = ({ email, password, login, isAuthenticated }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const handleChangeEmail = (e) => setUserEmail(e.target.value);
  const handleChangePassword = (e) => setUserPassword(e.target.value);

  if (isAuthenticated && email) {
    setUserEmail(email);
    setUserPassword(password);
    const user = { userEmail, userPassword };
    login(user);
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const user = { userEmail, userPassword };
    login(user);
  };

  return (
    <>
      {isAuthenticated && <Redirect to="/profile"> </Redirect>}
      <div className="login">
        <div className="form">
          <h2 style={{ color: "white" }}>Login</h2>
          <div className="input">
            <div className="inputBox">
              <label>Email</label>
              <input
                type="text"
                name=""
                placeholder="example@xyz.com"
                onChange={handleChangeEmail}
              ></input>
            </div>
            <div className="inputBox">
              <label>Password</label>
              <input
                type="password"
                name=""
                placeholder="******"
                onChange={handleChangePassword}
              ></input>
            </div>
            <div className="inputBox">
              <input
                type="submit"
                name=""
                value="Sign In"
                onClick={handleOnSubmit}
              ></input>
            </div>
          </div>
          <p className="forgetPassword">
            {" "}
            Forget Password ? <p>Click here </p>
          </p>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
  };
};
export default connect(mapStateToProps, { login })(Login);
