import React from "react";
import Axios from "axios";

import "./facts.css";

class InsertFacts extends React.Component {
  state = {
    text: "",
    category: "",
  };

  handleChangeText = (event) => {
    this.setState({ text: event.target.value });
  };
  handleChangeCategory = (event) => {
    this.setState({ category: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    const fact = {
      text: this.state.text,
      category: this.state.category,
    };

    Axios.post(`http://localhost:3000/api/facts`, fact).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br />
        <br />
        <br />
        <h3 style={{ textDecoration: "underline #ff6961" }}>
          Ajoute toi aussi une fact !
        </h3>
        <label className="add-fact">
          <h4>Catégorie :</h4>
          <input
            type="text"
            className="inputBoxFact"
            required
            onChange={this.handleChangeCategory}
          />{" "}
          <br />
          <h4>Texte :</h4>
          <input
            type="text"
            name="category"
            required
            onChange={this.handleChangeText}
          />
        </label>
        <button className="btn-facts-add" type="submit">
          Ajouter
        </button>
      </form>
    );
  }
}

export default InsertFacts;
