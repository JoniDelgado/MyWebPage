import styled from "styled-components";

export const StyleWorksSection = styled.section`
  padding: 6rem 2rem;

  .github {
    margin-left: 0.4rem;
  }
`;

export const JobsCard = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div:first-of-type {
    margin-bottom: 1.5rem;
    transition: all linear 0.3s;
  }

  .image {
    transition: all linear 0.3s;
    width: 100%;
  }

  strong {
    cursor: pointer;
  }

  div:last-of-type {
    margin-top: 1rem;
    display: flex;
    justify-content: space-evenly;
    img {
      width: 30px;
      height: 30px;
      cursor: pointer;
      filter: grayscale();
      transition: all linear 0.3s;
    }

    img:hover {
      filter: grayscale(0);
      transform: scale(1.4);
    }
  }
  &:hover {
    div:first-of-type {
      box-shadow: -25px 15px 15px pink;
    }

    .image {
      filter: grayscale();
      transform: scale(1.1);
    }
  }
`;
