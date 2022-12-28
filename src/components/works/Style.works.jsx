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
  border: thin solid #d8d8d8;
  border-radius: 5px;
  flex-direction: column;
  gap: 0.5rem;

  div:first-of-type {
    margin-bottom: 1.5rem;
    transition: all linear 0.3s;
  }

  .image {
    width: 100%;
    border-radius: 5px;
    transition: all linear 0.3s;
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
    box-shadow: rgba(255, 255, 255, 0.308) 0px 30px 60px -12px inset,
      rgba(255, 255, 255, 0.219) 0px 18px 36px -18px inset;

    .image {
      filter: grayscale();
      transform: scale(1.1);
    }
  }
`;
