import React, { useState, useEffect } from "react";
import Axios from "axios";

const TeamsInfos = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3000/api/teams/").then((response) =>
      setProjects(response.data)
    );
  }, []);
  return (
    <div className="container-teaminfo">
      {projects.map((e) => (
        <div className="team-wrapper">
          <div className="team-name">{e.name}</div>
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
  );
};

export default TeamsInfos;
