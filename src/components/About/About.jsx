import React from "react";
import { StyleAboutSection } from "./Style.about";
import linkedin from "../../assets/Images/linkedin.png";
import github from "../../assets/Images/github.png";

const About = () => {
  return (
    <StyleAboutSection>
      <h2>Un poco de quien soy</h2>
      <div>
        <p>
          Como a muchos nos ha sucedido el 2020 no ha sido un año más. La crisis
          y las dificultades nos ha llevado a replantear nuestra forma de vivir.
          Sin ser ajeno a las circunstancias emprendí mi camino hacia un nuevo
          desarrollo personal y profesional. Como apasionado de la tecnología he
          encontrado en el desarrollo front-end la posibilidad de reinventarme y
          seguir cumpliendo metas.
        </p>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/jonatan-delgado-bernardez-877992231/"
          target="_blank"
        >
          <img src={linkedin} alt="" />
        </a>
        <a href="https://github.com/JoniDelgado" target="_blank">
          <img src={github} alt="" />
        </a>
      </div>
    </StyleAboutSection>
  );
};

export default About;
