import React from "react";

import { InputContent } from "./styled";

const Input = ({ placeholder, children, name, ...props }) => {
  return (
    <InputContent>
      <label htmlFor={name}>{children}</label>
      <input {...props} name={name} placeholder={placeholder} />
    </InputContent>
  );
};

export default Input;
