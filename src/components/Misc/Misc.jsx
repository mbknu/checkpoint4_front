import React, { useState } from "react";
import { Link } from "react-router-dom";
import Facts from "./Facts/Facts";
import ChuckJokes from "./Chuck/ChuckJokes";
import ReactTooltip from "react-tooltip";

import "./misc.css";
import spotify from "../assets/image/spotify.png";
import chuckpic from "../assets/image/chucknorris.png";
import facts from "../assets/image/facts.png";

const Misc = () => {
  const [isModalVisible, setFactsModalVisible] = useState(false);
  const [isModalVisiblee, setChuckModalVisible] = useState(false);

  return (
    <div className="container-misc">
      <div className="misc-wrapper">
        <div className="title-misc-left"></div>
        <span className="misc-text">
          <h2>Misc</h2>
        </span>
        <div className="title-misc-right"></div>
      </div>
      <div className="misc-button">
        <button
          data-tip
          data-for="factTip"
          className="button-misc-one"
          onClick={() => setFactsModalVisible(true)}
        >
          <img src={facts} className="facts" alt="facts" />
        </button>
        <ReactTooltip id="factTip" place="top" effect="solid">
          Création d'une API et génération d'anécdotes aléatoires
        </ReactTooltip>

        <button
          data-tip
          data-for="chuckTip"
          className="button-misc-one"
          onClick={() => setChuckModalVisible(true)}
        >
          <img src={chuckpic} className="chuck" alt="chuck" />
          <ReactTooltip id="chuckTip" place="top" effect="solid">
            API de blagues de Chuck Norris
          </ReactTooltip>
        </button>

        <Link data-tip data-for="musicTip" className="button-misc-one">
          <img src={spotify} className="spotify" alt="spotify" />
          <ReactTooltip id="musicTip" place="top" effect="solid">
            Se connecter à Spotify
          </ReactTooltip>
        </Link>
      </div>
      {isModalVisible && (
        <div className="container-facts">
          {" "}
          <Facts />{" "}
          <button
            className="btn-facts"
            onClick={() => setFactsModalVisible(false)}
          >
            Close
          </button>
        </div>
      )}
      {isModalVisiblee && (
        <div className="container-facts">
          {" "}
          <ChuckJokes />{" "}
          <button
            className="btn-facts"
            onClick={() => setChuckModalVisible(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Misc;
