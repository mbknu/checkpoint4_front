import React from "react";
import Typical from "react-typical";

const steps = [
  `Welcome to Apis Project !`,
  1250,
  "This is what i can do after a 5 month formation",
  1000,
  "At the Wild Code School Bordeaux",
  1000,
  "Enjoy !",
  4000,
];

class IntroText extends React.Component {
  render() {
    return <Typical steps={steps} loop={Infinity} wrapper="p" />;
  }
}

export default IntroText;
