import styled from "styled-components";

export const StyleHeroSection = styled.section`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #1b2430;
  line-height: 1.5rem;

  a {
    text-align: center;
    width: 100%;
  }

  h1,
  h2 {
    font-size: 2.4rem;
    line-height: 2.5rem;
  }

  & > div:first-of-type {
    margin: auto;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
