import React from "react";
import { StyleHeroSection } from "./Styled.hero";
import profileImage from "../../assets/Images/imagen-perfil.jpeg";
import profileImages from "../../assets/Images/perfilsbg.png";

const Hero = () => {
  return (
    <StyleHeroSection>
      <div>
        <img src={profileImages} alt="imagen de perfil" />
      </div>
      <div>
        <div>
          <p>Hello World, soy</p>
          <h1>Jonatan Delgado</h1>
          <h2>Junior Front-End developer.</h2>
        </div>
        <p>
          Los saludo desde Alicante, España 👋. Estudiante de desarrollo
          front-end con conocimientos en HTML, CSS, y Javascript y
          especializandome en ReactJS.
        </p>

        <a href="#works">Mis Proyectos</a>
      </div>
    </StyleHeroSection>
  );
};

export default Hero;
