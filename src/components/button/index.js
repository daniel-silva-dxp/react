import React from "react";

import "./main.css";

const Button = ({ method, children }) => {
  return (
    <button type={method} className="btn btn-large btn-dark">
      {children}
    </button>
  );
};

export default Button;
