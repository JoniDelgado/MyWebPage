import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;
}

body {
  background-color: #1B2430;

}

a:link,
  a:visited,
  a:active {

    text-decoration: none;
    color: white
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

button {
    margin: 2rem auto;
    padding: 0.7rem;
    width: 50%;
    background-color: #f0c9a3ce;
    border: none;
    border-radius: 5px;
    color: #00005c;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;

    &:hover {
      background-color: #3b185f;
      color: #d8d8d8;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
  }
`;
