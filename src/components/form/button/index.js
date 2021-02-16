import React from "react";

import "./main.css";

const Button = ({ children }) => {
  return <button className="btn btn-medium btn-dark">{children}</button>;
};

export default Button;
