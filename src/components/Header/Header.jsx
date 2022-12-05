import React, { useState } from "react";
import { StyleHeader, StyleNav, StyleBarsMenu } from "./Styled.header";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <StyleHeader>
      <h2>JONATAN DELGADO</h2>
      <StyleBarsMenu
        isOpenMenu={isOpenMenu}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      />
      <StyleNav isOpenMenu={isOpenMenu}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </StyleNav>
    </StyleHeader>
  );
};

export default Header;
