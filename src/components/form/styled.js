import styled from "styled-components";

export const FormContent = styled.div`
  width: 300px;
  height: table;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const Paragraphy = styled.p`
  display: inline-block;
  width: 100%;
  margin: 10px 0 60px 0;

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
