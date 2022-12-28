import React from "react";
import giftList from "../../assets/Images/gift-list.png";
import memoryGame from "../../assets/Images/memory-game.png";
import rickAndMorty from "../../assets/Images/rickandmortyapp.png";
import desktop from "../../assets/Images/escritorio.png";
import gitHub from "../../assets/Images/github.png";
import { JobsCard, StyleWorksSection } from "../works/Style.works";

const Works = () => {
  return (
    <StyleWorksSection>
      <h2>Algunos de mis proyectos...</h2>
      <JobsCard>
        <div>
          <img className="image" src={memoryGame} alt="juego de memoria" />
        </div>
        <h3>Juego de memoria</h3>
        <p>
          Aplicación realizada con ReactJS, consiste en encontrar parejas dando
          vuelta las cartas de dos en dos.
        </p>
        <div>
          <a href="https://memory-game-jonatan.netlify.app/" target="_blank">
            <img src={desktop} alt="" />
          </a>
          <a
            href="https://github.com/JoniDelgado/memory-game/tree/newlLogic"
            target="_blank"
          >
            <img src={gitHub} alt="" />
          </a>
        </div>
      </JobsCard>
      <JobsCard>
        <div>
          <img className="image" src={giftList} alt="lista de regalos" />
        </div>
        <h3>Aplicación lista de regalos</h3>
        <p>
          Aplicación realizada con ReactJS, en la que podemos realizar una lista
          de compras para los regalos de navidad.
        </p>
        <div>
          <a href="https://xmas-list-app.netlify.app/" target="_blank">
            <img src={desktop} alt="" />
          </a>
          <a
            href="https://github.com/JoniDelgado/Lista-de-Regalos"
            target="_blank"
          >
            <img src={gitHub} alt="" />
          </a>
        </div>
      </JobsCard>
      <JobsCard>
        <div>
          <img className="image" src={rickAndMorty} alt="Rick and Morty App" />
        </div>
        <h3>Rick and Morty App</h3>
        <p>
          Aplicación en la que consumiendo la API de Rick and Morty, nos permite
          buscar entre todos sus personajes datos de los mismos y filtrar
          episodios en los que coinciden.{" "}
        </p>
        <div>
          <a href="https://rickandmortyjonatan.netlify.app/" target="_blank">
            <img src={desktop} alt="" />
          </a>
          <a
            href="https://github.com/JoniDelgado/RickAndMortyApp"
            target="_blank"
          >
            <img src={gitHub} alt="" />
          </a>
        </div>
      </JobsCard>
      <h3>
        Mas proyectos, en
        <a
          className="github"
          href="https://github.com/JoniDelgado"
          target="_blank"
        >
          GitHub
        </a>
        .
      </h3>
    </StyleWorksSection>
  );
};

export default Works;
