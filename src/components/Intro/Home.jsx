import React from "react";
import IntroText from "./IntroText";
import AutoSpinner from "./AutoSpinner";
import "../../App.css";

function Home() {
  return (
    <div className="App">
      <AutoSpinner />
      <IntroText />
    </div>
  );
}

export default Home;
