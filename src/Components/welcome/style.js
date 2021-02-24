import styled from "styled-components";

export const WelcomeContent = styled.header`
  width: 100%;
  height: 100px;
  margin-top: 60px;
  background-color: #fff;
  border-radiur: 3px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  -webkit-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);

  .title {
    h1 {
      padding: 0;
      margin: 0;
      font-size: 26px;
      font-weight: 600;
      color: #40004f;
      text-transform: uppercase;
    }
    p {
      font-family: "Roboto Mono", sans-serif;
      font-size: 14px;
      font-weight: 600;
    }
  }
  .wrap-img {
    width: 250px;
    img {
      width: 100%;
    }
  }
`;
