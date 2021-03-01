import React from "react";

import "./main.css";

const Input = ({ children, type, name, error, ...props }) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{children}</label>
      <input type={type} name={name} {...props} />
      <p className="error-message">{error}</p>
    </React.Fragment>
  );
};

export default Input;
