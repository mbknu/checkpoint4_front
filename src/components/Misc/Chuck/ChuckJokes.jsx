import React, { useState, useEffect } from "react";
import Axios from "axios";

const ChuckJokes = () => {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    Axios.get("https://api.chucknorris.io/jokes/random")
      .then((response) => response.data)
      .then((data) => setJokes(data));
  }, []);

  const nextChuckJoke = () => {
    Axios.get("https://api.chucknorris.io/jokes/random")
      .then((response) => response.data)
      .then((data) => setJokes(data));
  };

  return (
    <>
      <img src={jokes.icon_url} alt="chuck"></img>
      {jokes.value}
      <button className="btn-facts" onClick={() => nextChuckJoke()}>
        Next
      </button>
    </>
  );
};

export default ChuckJokes;
