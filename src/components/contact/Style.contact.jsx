import styled from "styled-components";

export const StyleContactSection = styled.section`
  form {
    margin: 1rem 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    border-radius: 5px;
    background-color: #9f73ab;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;

    & > * {
      padding: 0.3rem;
      width: 100%;
      border: none;
    }

    button {
      margin: 0.6rem auto;
    }
  }
`;
