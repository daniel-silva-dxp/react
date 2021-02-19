import styled from "styled-components";

export const HeaderContent = styled.header`
  width: 100%;
  height: 60px;
  background-color: #fff;

  -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);

  .container {
    height: 100%;
    display: flex;
    align-items: center;

    .logo {
      flex: 1;
      font-weight: 700;
    }

    nav {
      ul {
        width: 100px;
        display: flex;
        justify-content: space-around;
      }
    }
  }
`;
