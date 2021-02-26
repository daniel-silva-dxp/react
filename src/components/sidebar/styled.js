import styled from "styled-components";

export const Aside = styled.aside`
  width: 80px;
  padding: 20px 0;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;

  background-color: #fff;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .logo {
    width: 80px;
    height: 50px;

    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 56px;
    color: #5965e0;
  }
  ul {
    width: 80px;

    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    li {
      width: 80px;
      height: 50px;
      cursor: pointer;

      font-size: 20px;
      color: #666666;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: #f8f8f8;
        border-right: 4px solid #5965e0;
      }
    }
  }
`;
