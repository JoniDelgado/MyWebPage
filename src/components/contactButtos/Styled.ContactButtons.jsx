import styled from "styled-components";

const StyleContactButtonsContainer = styled.div`
  padding: 0 1rem;
  position: fixed;
  top: 50%;
  right: 0;
  color: white;
`;

const StyleSocialButton = styled.div`
  margin: 1rem 0;
  opacity: 0.5;
  filter: grayscale();
  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    opacity: 1;
    filter: grayscale(0);
  }
`;

export { StyleSocialButton, StyleContactButtonsContainer };
