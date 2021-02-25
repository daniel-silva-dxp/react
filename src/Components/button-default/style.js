import styled from "styled-components";

export const ButtonLarge = styled.button`
  display: inline-block;
  border-radius: 50px;
  border: none;
  outline: 0;
  cursor: pointer;

  width: 100%;
  height: 40px;
  padding: 0 15px;
  background: ${({ bgColor }) => bgColor};

  font-weight: 400;
  font-family: "Roboto Mono", sans-serif;
  line-height: 35px;
  font-size: 14px;
  color: #fff;

  -webkit-apparance: none;
  -moz-appearance: none;
  appearance: none;

  -webkit-transition: all 0.1s ease-out;
  transition: all 0.1s ease-out;

  &:hover {
    background: ${({ bgColorHover }) => bgColorHover};
  }
`;
