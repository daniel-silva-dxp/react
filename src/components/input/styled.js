import styled from "styled-components";

export const InputContent = styled.div`
  width: 100%;

  label {
    display: block;
    font-size: 12px;
    margin-bottom: 5px;
  }
  input {
    height: 35px;
    padding: 0px 15px;
    margin-bottom: 10px;

    border: 1px solid #dde4e6;
    border-radius: 3px;
    background: rgba(255, 255, 255, 1);

    font-size: 14px;
    line-height: 14px;
  }

  label,
  input {
    width: 100%;
    font-weight: 600;
    font-family: "Roboto Mono", sans-serif;
  }
`;
