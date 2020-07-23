import React, { useState, useEffect } from "react";
import Axios from "axios";

const TeamsInfos = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3000/api/teams/").then((response) =>
      setTeam(response.data)
    );
  }, []);
  return (
    <div className="title-choose-team">
      <hr />
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        <span
          style={{ textDecoration: "underline #ff6961", marginRight: "4px" }}
        >
          Choose your{" "}
        </span>
        <span style={{ color: "#ff6961", textDecoration: "underline white" }}>
          team
        </span>
      </h2>
      <br />
      <div className="container-teaminfo">
        <br />
        {team.map((e) => (
          <div className="team-wrapper">
            <div className="team-name">{e.name} :</div>
            <br />
            <img
              src={e.imageteam}
              className="team-banner"
              alt="team-banner"
            ></img>
            <br />
            <div className="team-description">{e.description}</div>
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsInfos;
