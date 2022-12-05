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
        <p>Hy there, I am</p>
        <h1>Jontan Delgado</h1>
        <h2>I'm a fron-end developer.</h2>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo provident
        dolores ex dolorem, dicta tenetur placeat officia magnam mollitia neque
        vero repellendus! Dicta modi quos consectetur aliquam ducimus, iure qui!
      </p>
      <button>Check my jobs</button>
    </StyleHeroSection>
  );
};

export default Hero;
