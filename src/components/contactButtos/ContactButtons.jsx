import React from "react";
import linkedin from "../../assets/Images/linkedin.png";
import github from "../../assets/Images/github.png";
import instagram from "../../assets/Images/instagram.png";

import {
  StyleContactButtonsContainer,
  StyleSocialButton,
} from "./Styled.ContactButtons";

const ContactButtons = () => {
  return (
    <StyleContactButtonsContainer>
      <StyleSocialButton>
        <a
          href="https://www.linkedin.com/in/jonatan-delgado-bernardez-877992231/"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
      </StyleSocialButton>
      <StyleSocialButton>
        <a href="https://github.com/JoniDelgado" target="_blank">
          <img src={github} alt="github" />
        </a>
      </StyleSocialButton>
      <StyleSocialButton>
        <a href="https://www.instagram.com/jona_edb/" target="_blank">
          <img src={instagram} alt="instagram" />
        </a>
      </StyleSocialButton>
    </StyleContactButtonsContainer>
  );
};

export default ContactButtons;
