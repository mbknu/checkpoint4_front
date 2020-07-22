import React, { useState, useEffect } from "react";
import Axios from "axios";

import "./facts.css";

const Facts = () => {
  const [facts, setFacts] = useState([]);
  const [factIndex, setFactIndex] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:3000/api/facts/")
      .then((response) => response.data)
      .then((data) => {
        setFacts(data);
        setRandomFactIndex();
      });
  }, []);

  const setRandomFactIndex = () => {
    const index = Math.floor(Math.random() * facts.length);
    setFactIndex(index);
  };

  const currentFact = factIndex !== null ? facts[factIndex] : null;

  return (
    <div className="container-facts">
      <h3 className="facts-title">{currentFact && currentFact.category}</h3>
      {currentFact && currentFact.text}
      <div className="button-facts">
        <button className="btn-facts" onClick={() => setRandomFactIndex()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Facts;
