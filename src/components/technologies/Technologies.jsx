import React from "react";
import { StyleTechnologiesSection } from "./Style.technologies";
import js from "../../assets/Images/js.png";
import html from "../../assets/Images/html.png";
import css from "../../assets/Images/css.png";
import sass from "../../assets/Images/sass.png";
import react from "../../assets/Images/react.png";
import gitHub from "../../assets/Images/github.png";
import typescript from "../../assets/Images/typescript.png";
import next from "../../assets/Images/next.png";
import styled from "../../assets/Images/styled-components.png";

const Technologies = () => {
  return (
    <StyleTechnologiesSection>
      <h2>Tecnologías con las que trabajo hasta el momento </h2>
      <div>
        <img src={js} alt="" style={{ width: "50px" }} />
        <img src={html} alt="" style={{ width: "50px" }} />
        <img src={css} alt="" style={{ width: "50px" }} />
        <img src={react} alt="" style={{ width: "50px" }} />
        <img
          src={styled}
          alt=""
          style={{ width: "50px", backgroundColor: "white" }}
        />
        <img src={gitHub} alt="" style={{ width: "50px" }} />
      </div>
      <h2>En este momento estudiando...</h2>
      <div>
        <img src={typescript} alt="" style={{ width: "50px" }} />
        <img src={next} alt="" style={{ width: "50px" }} />
      </div>
    </StyleTechnologiesSection>
  );
};

export default Technologies;
