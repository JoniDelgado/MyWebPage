import React from "react";
import { StyleContactSection } from "./Style.contact";

const Contact = () => {
  return (
    <StyleContactSection>
      <h2>Contacto</h2>
      <p>
        Puedes comunicarte conmigo desde el siguiente formulario de contacto:
      </p>
      <form name="contact" method="POST">
        <input type="hidden" name="form-name" value="contact" />
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
