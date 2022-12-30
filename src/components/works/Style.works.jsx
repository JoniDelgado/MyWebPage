import styled from "styled-components";

export const StyleWorksSection = styled.section`
  padding: 4rem 2rem;

  .github {
    margin-left: 0.4rem;
  }
`;

export const JobsCard = styled.div`
  margin: 2rem auto;
  max-width: 700px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #3e4c5e;
  border-radius: 5px;

  div {
    margin: auto;
    width: 90%;
    transition: all linear 0.3s;

    .image {
      width: 100%;
      border-radius: 5px;
    }
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;

    div .image {
      width: 300px;
      height: 300px;
      object-fit: cover;
      filter: grayscale();
      transition: all linear 0.3s;
    }

    &:hover {
      div .image {
        filter: grayscale(0);
      }
    }
  }
`;

export const StyleInfo = styled.div`
  div:nth-child(1) {
    margin: 0.5rem 0;
    display: flex;
    justify-content: center;
    gap: 2rem;

    img {
      width: 25px;
      height: 25px;
      cursor: pointer;
      filter: grayscale();
      transition: all linear 0.3s;
    }

    img:hover {
      filter: grayscale(0);
      transform: scale(1.4);
    }
  }

  div:nth-child(2) {
    h3 {
      margin-bottom: 0.5rem;
    }
  }

  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
  }
`;
