import React from "react";

import { InputContent } from "./style";

const Input = ({ placeholder, ...props }) => {
  return <InputContent placeholder={placeholder} {...props} />;
};

export default Input;
