import React from "react";
import { StyleHeroSection } from "./Styled.hero";
import profileImage from "../../assets/Images/imagen-perfil.jpeg";

const Hero = () => {
  return (
    <StyleHeroSection>
      <div>
        <img src={profileImage} alt="imagen de perfil" />
      </div>
      <div>
        <p>Hello World, soy</p>
        <h1>Jontan Delgado</h1>
        <h2>Junior Front-End developer.</h2>
      </div>
      <p>
        Como a muchos nos ha sucedido el 2020 no ha sido un año más. La crisis y
        las dificultades nos ha llevado a replantear nuestra forma de trabajar.
        <br></br>
        Sin ser ajeno a las circunstancias emprendí mi camino hacia un nuevo
        desarrollo personal y profesional.
        <br></br>
        Como apasionado de la tecnología he encontrado en el desarrollo
        front-end la posibilidad de reinventarme y seguir cumpliendo metas.
      </p>
      <button>Check my jobs</button>
    </StyleHeroSection>
  );
};

export default Hero;
