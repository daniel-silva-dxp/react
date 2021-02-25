import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrap = styled.div`
  width: 30%;
  height: table;
  padding: 20px;
  background-color: #fff;

  border-radius: 8px;

  -webkit-box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.15);

  h1 {
    text-align: center;
    text-transform: uppercase;
    color: #585859;
  }

  .form-control {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin: 5px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 992px) {
    width: 50%;
  }
`;

export const Paragraphy = styled.p`
  display: inline-block;
  width: 100%;

  text-align: center;
  font-family: "Roboto Mono", sans-serif;
  font-size: 12px;
  color: #a3a2a1;
  font-weight: 600;

  > * {
    &:first-child {
      color: #75dab4;
    }
  }
`;
