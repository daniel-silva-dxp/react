import styled from "styled-components";

export const Copyrights = styled.footer`
  width: 100%;
  height: 60px;
  background-color: #fff;
  position: fixed;
  bottom: 0;

  border-top: 4px solid #75dab4;

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 12px;
      font-family: "Roboto Mono", sans-serif;
      a {
        color: #75dab4;
        padding-left: 5px;
      }
    }
  }
`;
