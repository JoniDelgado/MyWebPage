import React from "react";
import { StyleAboutSection } from "./Style.about";
import linkedin from "../../assets/Images/linkedin.png";
import instagram from "../../assets/Images/instagram.png";

const About = () => {
  return (
    <StyleAboutSection>
      <h2>Un poco sobre mi...</h2>
      <div>
        <p>
          Como a muchos nos ha sucedido el 2020 no ha sido un año más. La crisis
          y las dificultades nos ha llevado a replantear nuestra forma de vivir,
          trabajar y mucho mas. Sin ser ajeno a las circunstancias emprendí mi
          camino hacia un nuevo desarrollo personal y profesional.
        </p>
        <p>
          Como apasionado de la tecnología he encontrado en el desarrollo
          front-end la posibilidad de reinventarme y seguir cumpliendo metas.
        </p>
        <p>
          He realizado cursos en distintas plataformas como Platzi, Udemy,
          YouTube entre otros, aprovechando cada momento libre para codear y
          mejorar cada día.
        </p>
        <p>
          Como viajero incorregible he recorrido muchos lugares del mundo cámara
          en mano, por lo que les dejo también mi perfil de instagram para quien
          quiera echarle un vistazo a mis otras dos pasiones... 🛩️🌎📷!!
        </p>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/jonatan-delgado-bernardez-877992231/"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://www.instagram.com/jona_edb/" target="_blank">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
    </StyleAboutSection>
  );
};

export default About;
