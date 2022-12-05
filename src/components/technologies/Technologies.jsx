import React from "react";
import { StyleTechnologiesSection } from "./Style.technologies";
import js from "../../assets/Images/js.png";
import html from "../../assets/Images/html.png";
import css from "../../assets/Images/css.png";
import sass from "../../assets/Images/sass.png";
import react from "../../assets/Images/react.png";
import gitHub from "../../assets/Images/github.png";

const Technologies = () => {
  return (
    <StyleTechnologiesSection>
      <h2>Tecnologies i'm working with at the moment... </h2>
      <img src={js} alt="" style={{ width: "50px" }} />
      <img src={html} alt="" style={{ width: "50px" }} />
      <img src={css} alt="" style={{ width: "50px" }} />
      <img src={react} alt="" style={{ width: "50px" }} />
      <img src={sass} alt="" style={{ width: "50px" }} />
      <img src={gitHub} alt="" style={{ width: "50px" }} />
    </StyleTechnologiesSection>
  );
};

export default Technologies;
