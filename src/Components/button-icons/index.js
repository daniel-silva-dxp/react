import React from "react";

import { ButtonLarge } from "./style";

const ButtonIcons = ({ children, ...props }) => {
  return <ButtonLarge {...props}>{children}</ButtonLarge>;
};

export default ButtonIcons;
