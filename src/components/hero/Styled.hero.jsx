import styled from "styled-components";

export const StyleHeroSection = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #3f3b6c;

  & > div:first-of-type {
    margin: auto;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
