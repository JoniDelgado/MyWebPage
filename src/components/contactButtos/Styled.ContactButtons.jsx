import styled from "styled-components";

const StyleContactButtonsContainer = styled.div`
  padding: 0 1rem;
  position: fixed;
  top: 40vh;
  right: 0;

  color: white;

  @media screen and (min-width: 600px) {
    position: static;
    display: flex;
    gap: 2rem;
  }
`;

const StyleSocialButton = styled.div`
  margin: 1rem 0;
  opacity: 0.5;
  filter: grayscale();
  transition: all linear 0.4s;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    opacity: 1;
    filter: grayscale(0);
  }

  @media screen and (min-width: 600px) {
    opacity: 1;
    filter: unset;

    img {
      width: 30px;
      height: 30px;
    }

    &:hover {
      transform: scale(0.8);
    }
  }
`;

export { StyleSocialButton, StyleContactButtonsContainer };
