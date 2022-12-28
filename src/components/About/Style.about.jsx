import styled from "styled-components";

export const StyleAboutSection = styled.section`
  line-height: 1.5rem;

  h2 {
    margin-bottom: 2rem;
  }

  div:last-of-type {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
    img {
      width: 40px;
      transition: all linear 0.2s;
    }

    img:hover {
      transform: scale(1.2);
    }
  }
`;
