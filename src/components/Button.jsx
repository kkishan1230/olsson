import React from "react";

const Button = ({ text, bg }) => {
  return (
    <div
      className={`btn ${
        bg ? "bg-[#fff] text-[#3586ff] font-clash_semibold" : ""
      }`}
    >
      {text}
    </div>
  );
};

export default Button;
