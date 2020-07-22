import React from "react";
import ReactPlayer from "react-player";

import "./projects.css";

const Projects = () => {
  return (
    <div className="container-projects">
      <div className="projects-nrgybox">
        <div className="title-nrgybox"></div>
        <text style={{ fontWeight: "1000", fontSize: "30px" }}>
          NRGY<span style={{ color: "#ff6961" }}>Box</span>
        </text>
        <div className="player-nrgybox">
          <ReactPlayer
            className="movie"
            width={1791}
            url="https://www.youtube.com/watch?v=e5Zr0x_N1y4"
            controls={true}
          />
          <div className="text-nrgybox">
            <br />
            <br />
            <h2>
              <span style={{ color: "#ff6961" }}>Projet 3</span> | 6 semaines |
              5 développeurs
              <br />
            </h2>
            <text className="text-contain">
              Projet réalisé pour le client NRGYBox
              <br />
              NRGYBox a pour vocation d'aider les maires à mieux gérer
              l'éclairage publique.
              <br />
              Pour cela ils avaient besoin d'une application visuelle pour
              relier avec la partie technique. En tant qu'usager je peux
              consulter les programmes d'éclairage de n'importe qu'elle ville,
              voir la météo sur 7 jours.
              <br />
              En tant que Maire je peux consulter, programmer ou modifier les
              programmes d'éclairage.
              <br />
              <br />
              <h3>Les fonctionnalités :</h3>
              Géolocalisation, Authentification, Multiple API, Favoris,
              Formulaire de Contact, site responsive
              <h3>Outils : </h3>
              React.JS, Redux & Node.JS, méthode Scrum, JWT, Git & GitHub, MySQL
              <h3>Développeurs : </h3>
              Chloé, Johanna, Enzo, Benoit & Michaël
            </text>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="projects-caremind">
        <div className="wrapper-caremind">
          <span style={{ color: "#ff6961" }}>Care</span>mind
          <div className="title-caremind"></div>
        </div>
        <div className="player-caremind">
          <ReactPlayer
            className="movie"
            width={1791}
            url="https://youtu.be/0miMcaLF_1Q"
            controls={true}
          />
          <div className="text-caremind">
            <br />
            <br />
            <h2>
              <span style={{ color: "#ff6961" }}>Hackathon</span> | 48h | 5
              développeurs
              <br />
            </h2>
            <text className="text-contain">
              Hackathon organisé par Doctolib & Wild Code School. Le sujet
              devait avoir un rapport avec les soins ou la consultation à
              distance. Caremind est un assistant médical virtuel focalisé sur
              la prévention des examens médicaux obligatoires et suivant l'âge
              ou/et le sexe
              <br />
              <br />
              <h3>Les fonctionnalités :</h3>
              Authentification, Chatbot, Dashboard, Timeline, site responsive
              ainsi que la création d'une API.
              <h3>Outils : </h3>
              React.JS, Redux & Node.JS, méthode Scrum, JWT, Git & GitHub, MySQL
              <h3>Développeurs : </h3>
              Chloé, David, Christelle, Mathilde & Michaël
            </text>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="projects-jumanjs">
        <div className="title-jumanjs"></div>
        <text style={{ fontWeight: "1000", fontSize: "30px" }}>
          Juman<span style={{ color: "#ff6961" }}>JS</span>
        </text>
        <div className="player-jumanjs">
          <ReactPlayer
            className="movie"
            width={1791}
            url="https://youtu.be/CW2065TP0hU"
            controls={true}
          />
          <div className="text-jumanjs">
            <br />
            <br />
            <h2>
              <span style={{ color: "#ff6961" }}>Projet 2</span> | 5 semaines |
              4 développeurs
              <br />
            </h2>
            <text className="text-contain">
              Jeu multijoueur sur le thème de Jumanji.
              <br />
              Nous avions 5 semaines pour réaliser un jeu en utilisant une API
              et nos têtes.
              <br />
              JumanJS se joue jusqu'à 4, le but étant d'arriver sur le rond en
              central pour gagner, c'est un système de question/réponse avec un
              timer, si l'on répond faux ou en retard une jauge de panique
              augmente, si cette dernière se remplie entièrement la partie est
              perdue.
              <br />
              <br />
              <h3>Les fonctionnalités :</h3>
              Récupération des données d'une API, multijoueur sur le même écran,
              jeu au tour par tour, bar de panique
              <h3>Outils : </h3>
              React.JS, méthode Scrum, Git & GitHub
              <h3>Développeurs : </h3>
              Grégory, Elodie, Chloé, Michaël
            </text>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="projects-wildalorian">
        <div className="wrapper-wildalorian">
          <span style={{ color: "#ff6961", marginRight: "0.25em" }}>The </span>{" "}
          Wildalorian
          <div className="title-wildalorian"></div>
        </div>
        <div className="player-wildalorian">
          <ReactPlayer
            className="movie"
            width={1791}
            url="https://youtu.be/2kvT5UsdeC8"
            controls={true}
          />
          <div className="text-wildalorian">
            <br />
            <br />
            <h2>
              <span style={{ color: "#ff6961" }}>Hackathon</span> | 24h | 4
              développeurs
              <br />
            </h2>
            <text className="text-contain">
              Hackathon de 24h organisé par la Wild Code School.
              <br />
              Le thème était une simple phrase : "Voyager depuis son canapé"{" "}
              <br />
              Nous avons donc décidé d'imaginer un chasseur de prime bloqué chez
              lui en raison du Covid-19 qui souhaité repartir à l'aventure en
              moins de 24h. Nous lui avons confectionné un vaisseau avec un
              co-pilote de qualité en la personne de baby Yoda. Nous avons réçu
              le prix coup de <span style={{ color: "#ff6961" }}>coeur</span> du
              Jury.
              <br />
              <br />
              <h3>Les fonctionnalités :</h3>
              ReactPlayer, Blagues aléatoires
              <h3>Outils : </h3>
              React.JS, API
              <h3>Développeurs : </h3>
              Benoit , François , Thomas & Michaël
            </text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
