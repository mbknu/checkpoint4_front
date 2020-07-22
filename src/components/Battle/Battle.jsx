import React from "react";
import Countdown from "./Countdown";
import LogoBattle from "./lotties/LogoBattle";
import Register from "../auth/Register/Register";
import { useHistory } from "react-router-dom";

import "./battle.css";

function Battle() {
  const history = useHistory();

  const handleClickLogin = () => {
    history.push("/login");
  };

  return (
    <div className="container-battle">
      <div className="battle-logo">
        <LogoBattle />
      </div>
      <div className="battle-timer">
        <Countdown futureDate="2020-07-31 23:59:59" />{" "}
        <p style={{ color: "#ff6961" }}>secs</p>
      </div>
      <div className="button-battle">
        <p className="text-battle-description">
          Toi aussi viens participer à la prochaine{" "}
          <span style={{ color: "#ff6961" }}>bataille de code. </span>
          C'est une compétition pour le{" "}
          <span style={{ color: "#ff6961" }}>fun</span> par équipe de 4. Si tu
          es tout seul, pas de panique tu peux trouver d'autre personnes et
          commencer le challenge ! Alors tu attends quoi ?{" "}
          <span style={{ color: "#ff6961" }}>Let's Code !</span>
        </p>
      </div>
      <div className="login-battle">
        <button className="btn-redirect-login" onClick={handleClickLogin}>
          Se connecter
        </button>
        <Register />
      </div>
    </div>
  );
}

export default Battle;
