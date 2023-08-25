import React from "react";
import "./Button.css";

const Button = ({ title, width, height, color, background, action, id }) => {
  return (
    <button
      id={id}
      onClick={(e) => {
        action(e);
      }}
      style={{ width, height, color, background }}
      className="btn"
    >
      {title}
    </button>
  );
};

export default Button;
