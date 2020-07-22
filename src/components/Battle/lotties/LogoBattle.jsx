import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "./superHero.json";

class LogoTimeline extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div>
        <div className="text-battle">
          La prochaine bataille aura lieu dans :
        </div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    );
  }
}

export default LogoTimeline;
