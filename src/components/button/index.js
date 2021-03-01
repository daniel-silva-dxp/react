import React from "react";

import "./main.css";

const Button = ({ method, children, ...props }) => {
  return (
    <button type={method} {...props}>
      {children}
    </button>
  );
};

export default Button;
