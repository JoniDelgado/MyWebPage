import styled from "styled-components";

export const StyleHeroSection = styled.section`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #1b2430;
  line-height: 1.5rem;

  a {
    margin-top: 1rem;
    padding: 0.5rem;
    width: 40%;
    text-align: center;
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

  h1,
  h2 {
    font-size: 2.4rem;
    line-height: 2.5rem;
  }

  & > div:first-of-type {
    width: 180px;
    height: 180px;
    align-self: center;
    border-radius: 50%;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & > div:last-of-type {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media screen and (min-width: 650px) {
    flex-direction: row-reverse;
    justify-content: space-between;

    & > div:last-of-type {
      width: 60%;
    }

    & > div:first-of-type {
      margin: auto;
      width: 200px;
      height: 200px;
      align-self: center;
    }
  }
`;
