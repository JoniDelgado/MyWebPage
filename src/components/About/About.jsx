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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          cupiditate explicabo velit deserunt iusto, a laboriosam nesciunt ipsa
          dolorum, earum necessitatibus veniam maxime nostrum quis doloribus cum
          nihil, reiciendis eaque!
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
