import styled from "styled-components";

export const Btn = styled.button`
  display: inline-block;
  border-radius: 3px;
  border: none;
  outline: 0;
  cursor: pointer;

  width: 100%;
  height: 30px;
  padding: 0 10px;
  background: ${({ bgColor }) => bgColor};

  font-weight: 600;
  font-family: "Roboto Mono", sans-serif;
  line-height: 28px;
  font-size: 14px;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  -webkit-apparance: none;
  -moz-appearance: none;
  appearance: none;

  -webkit-transition: all 0.1s ease-out;
  transition: all 0.1s ease-out;

  &:hover {
    background: ${({ bgColorHover }) => bgColorHover};
  }
`;
