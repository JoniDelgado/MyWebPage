import styled from "styled-components";

export const StyleAboutSection = styled.section`
  line-height: 1.5rem;

  h2 {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }

  div:last-of-type {
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
    img {
      width: 30px;
      transition: all linear 0.2s;
    }

    img:hover {
      transform: scale(1.2);
    }
  }
`;
