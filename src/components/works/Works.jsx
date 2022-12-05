import React from "react";
import { StyleWorksSection, JobsCard } from "../works/Style.works";
import prueba from "../../assets/Images/prueba.jpeg";

const Works = () => {
  return (
    <StyleWorksSection>
      <h2>Trabajos Realizados</h2>
      <JobsCard>
        <div>
          <img src={prueba} alt="" />
        </div>
        <h3>Nombre del trabajo</h3>
        <p>Pequeña descripcion</p>
      </JobsCard>
      <JobsCard>
        <div>
          <img src={prueba} alt="" />
        </div>
        <h3>Nombre del trabajo</h3>
        <p>Pequeña descripcion</p>
      </JobsCard>
      <JobsCard>
        <div>
          <img src={prueba} alt="" />
        </div>
        <h3>Nombre del trabajo</h3>
        <p>Pequeña descripcion</p>
      </JobsCard>
    </StyleWorksSection>
  );
};

export default Works;
