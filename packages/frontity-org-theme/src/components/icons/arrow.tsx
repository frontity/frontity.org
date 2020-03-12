import React from "react";

const Arrow: React.FC<{ color?: string }> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 11 8"
    width="11"
    height="8"
  >
    <path
      fill={color || "currentColor"}
      fillRule="evenodd"
      d="M5.355 7.681l-.008.009L0 1.983 1.858 0l3.787 4.042L9.142.31 11 2.293 5.653 8z"
    />
  </svg>
);

export default Arrow;
