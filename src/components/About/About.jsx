import React from "react";
import { StyleAboutSection, AboutCard } from "./Style.about";

const About = () => {
  return (
    <StyleAboutSection>
      <h2>About</h2>
      <AboutCard>
        <div>
          <h3>Hi, I'm Jonatan Delado, nice to meet you</h3>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            cupiditate explicabo velit deserunt iusto, a laboriosam nesciunt
            ipsa dolorum, earum necessitatibus veniam maxime nostrum quis
            doloribus cum nihil, reiciendis eaque!
          </p>
        </div>
      </AboutCard>
    </StyleAboutSection>
  );
};

export default About;
