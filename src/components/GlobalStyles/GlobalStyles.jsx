import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
    font-family: 'Montserrat', sans-serif;
}

body {
  background-color: #3F3B6C;

}

section {
  padding: 4rem 2rem;
}

h1, h3 {
  color: #9F73AB;
}

h2 {
  color: #C060A1
}


p {
  color: #D8D8D8;
}

ul {
  list-style: none;
}
`;
