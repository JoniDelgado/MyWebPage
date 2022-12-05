import styled from "styled-components";

export const StyleHeader = styled.header`
  width: 100%;
  height: 80px;
  padding: 1rem 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #3b185f;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 20px, rgba(27, 24, 54, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(31, 28, 61, 0.09) 0px -3px 5px;

  h2 {
    color: #d8d8d8;
  }
`;

export const StyleNav = styled.nav`
  margin-top: 80px;
  padding-top: 80px;
  width: 100vw;
  height: 100vh;
  display: ${({ isOpenMenu }) => (!isOpenMenu ? "none" : "flex")};
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f0c9a3ce;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  ul {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    color: #00005c;
    font-size: 2rem;
    text-transform: uppercase;
  }

  li:hover {
    color: #c060a1;
  }
`;

export const StyleBarsMenu = styled.div`
  width: 25px;
  height: 15px;
  position: relative;
  border-top: ${({ isOpenMenu }) => (!isOpenMenu ? "3px" : 0)} solid #d8d8d8;
  border-bottom: ${({ isOpenMenu }) => (!isOpenMenu ? "3px" : 0)} solid #d8d8d8;
  cursor: pointer;

  &::after,
  &::before {
    content: "";
    width: 100%;
    position: absolute;
    top: 35%;
    left: 0;
    border-bottom: 3px solid #d8d8d8;
    transition: all linear 0.3s;
  }

  &::after {
    -moz-transform: ${({ isOpenMenu }) => (!isOpenMenu ? 0 : "rotate(45deg)")};
    -webkit-transform: ${({ isOpenMenu }) =>
      !isOpenMenu ? 0 : "rotate(45deg)"};
    -o-transform: ${({ isOpenMenu }) => (!isOpenMenu ? 0 : "rotate(45deg)")};
    -ms-transform: ${({ isOpenMenu }) => (!isOpenMenu ? 0 : "rotate(45deg)")};
    transform: ${({ isOpenMenu }) => (!isOpenMenu ? 0 : "rotate(45deg)")};
  }

  &::before {
    -moz-transform: ${({ isOpenMenu }) => (!isOpenMenu ? 0 : "rotate(-45deg)")};
    -webkit-transform: ${({ isOpenMenu }) =>
      !isOpenMenu ? 0 : "rotate(-45deg)"};
    -o-transform: ${({ isOpenMenu }) => (!isOpenMenu ? 0 : "rotate(-45deg)")};
    -ms-transform: ${({ isOpenMenu }) => (!isOpenMenu ? 0 : "rotate(-45deg)")};
    transform: ${({ isOpenMenu }) => (!isOpenMenu ? 0 : "rotate(-45deg)")};
  }
`;
