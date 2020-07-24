import React, { useState, useEffect } from "react";
import Axios from "axios";

import "./about.css";

const ToDo = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/api/todo")
      .then((response) => response.data)
      .then((data) => setTodo(data));
  }, []);

  const handleDelete = (event, id) => {
    console.log("event", event, "id", id);
    Axios.delete(`http://localhost:3000/api/todo/${id}`).then((res) =>
      deleteTodo(id)
    );
  };
  const deleteTodo = (id) => {
    const newArray = todo.filter((element) => element.id !== id);
    setTodo(newArray);
  };

  return (
    <>
      <div className="container-about">
        <hr />
        <div className="title-name">
          <h2>TODO :</h2>
        </div>

        {todo.map((e) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row-reverse",
            }}
          >
            <ul className="todo-list">
              <li>{e.text}</li>
            </ul>
            <button
              onClick={(event) => handleDelete(event, e.id)}
              className="btn-redirect-login"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToDo;
