import React from "react";

import "./main.css";

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="btn btn-medium btn-purple">
      {children}
    </button>
  );
};

export default Button;
