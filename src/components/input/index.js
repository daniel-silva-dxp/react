import React from "react";

import "./main.css";

const Input = ({ children, type, name, ...props }) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{children}</label>
      <input type={type} name={name} {...props} />
    </React.Fragment>
  );
};

export default Input;
