import React from "react";

import { ButtonLarge } from "./style";

const Button = ({ children, ...props }) => {
  return <ButtonLarge {...props}>{children}</ButtonLarge>;
};

export default Button;
