import React from "react";

import "./about.css";

function About() {
  return (
    <div>
      <div className="container-about">
        <div className="title-name">
          <h2>TODO :</h2>
        </div>
        <div className="title-about">
          <ul className="todo-list">
            <hr />
            <li>Ajouter une private route</li>
            <hr />
            <li>Fixer le problème de refresh sur le login</li>
            <hr />
            <li>
              Fixer lors de la création d'un utilisateur en rajoutant des
              messages d'erreur ou de validation
            </li>
            <hr />
            <li>Pouvoir choisir une équipe, l'afficher dans le profile</li>
            <hr />
            <li>Régler les soucis de CSS et rendre le site responsive</li>
            <hr />
            <li>
              Ajouter des infos loading lors du chargement des pages/composants
            </li>
            <hr />
            <li>Faire fonctionner l'API SPotify</li>
            <hr />
            <li>Restructurer l'aborescence de l'app en général</li>
            <hr />
          </ul>
        </div>
      </div>
      <div className="cv-michael"></div>
    </div>
  );
}

export default About;
