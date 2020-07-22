import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../actions/authActions";
import Modal from "react-modal";

import "./register.css";

const Register = ({ register, isAuthenticated }) => {
  const [showModal, setShowModal] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const patient = { lastname, firstname, nickname, email, password };
    register(patient);
    setShowModal(false);
  };

  const handleChangeFirstname = (e) => setFirstname(e.target.value);
  const handleChangeLastname = (e) => setLastname(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleChangeNickname = (e) => setNickname(e.target.value);

  const customStylesDesktop = {
    //overlaybackground
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(40, 44, 52, 0.6)",
    },
    //pop-up content
    content: {
      position: "absolute",
      top: "20px",
      left: "30%",
      right: "30%",
      bottom: "40px",
      border: "0px solid #ccc",
      background: "rgb(66, 78, 102)",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "20px",
      outline: "none",
      padding: "20px",
      height: "98vh",
      margintop: "0",
    },
  };

  return (
    <div>
      <div className="formDesktop">
        {isAuthenticated === false ? (
          <Redirect to="/login" emailUser={email} passwordUser={password} />
        ) : (
          <>
            <button
              className="btn-redirect-login"
              variant="contained"
              color="primary"
              onClick={handleOpenModal}
            >
              Je crée mon compte
            </button>
            <Modal
              isOpen={showModal}
              contentLabel="Modal #1 Global Style Override Example"
              onRequestClose={handleCloseModal}
              style={customStylesDesktop}
            >
              <div className="modalHeader">
                <div className="closeModal" onClick={handleCloseModal}>
                  <p>X</p>
                </div>
                <div className="title-register">
                  <h1>Créer mon profil</h1>
                </div>
              </div>
              <div className="RegistrationForm">
                <form
                  className="formContainer"
                  onSubmit={handleSubmit}
                  method="POST"
                >
                  <hr />
                  <h2 className="h2-register">Prénom :</h2>
                  <input
                    id="Firstname"
                    variant="outlined"
                    value={firstname}
                    className="input-register"
                    onChange={handleChangeFirstname}
                  />
                  <h2 className="h2-register">Nom :</h2>
                  <div>
                    <input
                      id="Lastname"
                      variant="outlined"
                      className="input-register"
                      value={lastname}
                      onChange={handleChangeLastname}
                    />
                  </div>
                  <h2 className="h2-register">Email :</h2>
                  <div>
                    <input
                      id="email"
                      variant="outlined"
                      className="input-register"
                      value={email}
                      onChange={handleChangeEmail}
                    />
                  </div>
                  <h2 className="h2-register">Password :</h2>
                  <div>
                    <input
                      id="password"
                      type="password"
                      className="input-register"
                      variant="outlined"
                      value={password}
                      onChange={handleChangePassword}
                    />
                  </div>
                  <h2 className="h2-register">Pseudo :</h2>
                  <div>
                    <input
                      id="password"
                      className="input-register"
                      variant="outlined"
                      value={nickname}
                      onChange={handleChangeNickname}
                    />
                  </div>
                  <hr />
                  <button
                    className="btn-redirect-login"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Créer mon profil
                  </button>
                </form>
              </div>
            </Modal>
          </>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};
export default connect(mapStateToProps, { register })(Register);
