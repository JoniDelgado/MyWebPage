import React from "react";
import About from "../About/About";
import Contact from "../contact/Contact";
import Header from "../Header/Header";
import Hero from "../hero/Hero";
import Technologies from "../technologies/Technologies";
import Works from "../works/Works";
import { StyleMainContainer } from "./Styled.Main";

const Main = () => {
  return (
    <StyleMainContainer>
      <Header />
      <Hero />
      {/* <About /> */}
      <Works />
      <Technologies />
      <Contact />
    </StyleMainContainer>
  );
};

export default Main;
