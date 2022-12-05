import styled from "styled-components";

export const StyleContactSection = styled.section`
  form {
    margin-top: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    border: 1px solid black;

    & > * {
      padding: 0.3rem;
      width: 100%;
    }
  }
`;
