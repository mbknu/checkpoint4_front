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
    <>
      {projects.map((d) => (
        <div>
          {d.name} et {d.description}
        </div>
      ))}
    </>
  );
};

export default TeamsInfos;
