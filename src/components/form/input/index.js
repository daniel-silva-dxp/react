import React from "react";

import "./main.css";

const Input = ({ handleChange, ...props }) => {
  return <input onChange={handleChange} {...props} />;
};

export default Input;
