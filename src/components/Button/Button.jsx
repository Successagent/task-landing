import React from "react";
import "./Button.css";

const Button = ({ title, width, height, color, background }) => {
  return (
    <button style={{ width, height, color, background }} className="btn">
      {title}
    </button>
  );
};

export default Button;
