import styled from "styled-components";

export const StyleHeroSection = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #3f3b6c;

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
