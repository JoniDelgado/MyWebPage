import React from "react";
import { StyleContactSection } from "./Style.contact";

const Contact = () => {
  return (
    <StyleContactSection>
      <h2>Contacto</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut doloribu
      </p>
      <form>
        <input type="text" name="name" placeholder="Nombre" />
        <input type="mail" name="email" placeholder="Email" />
        <textarea
          name="texto"
          cols="30"
          rows="10"
          placeholder="Dejame tu mensaje ;)"
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </StyleContactSection>
  );
};

export default Contact;
