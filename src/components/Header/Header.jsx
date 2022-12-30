import React from "react";
import ContactButtons from "../contactButtos/ContactButtons";
import { StyleHeader } from "./Styled.header";

const Header = () => {
  return (
    <StyleHeader>
      <h2>JONATAN DELGADO</h2>
      <ContactButtons />
    </StyleHeader>
  );
};

export default Header;
