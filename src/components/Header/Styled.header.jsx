import styled from "styled-components";

export const StyleHeader = styled.header`
  width: 100%;
  height: 70px;
  padding: 1rem 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background: rgba(81, 85, 126, 0.459);
  background: linear-gradient(
    180deg,
    #51557ec8 48%,
    #3e4160c8 78%,
    #3d405fc8 79%,
    #32354ac8 100%
  );

  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

  backdrop-filter: blur(0.2rem);

  h2 {
    color: #d8d8d8;
  }
`;
