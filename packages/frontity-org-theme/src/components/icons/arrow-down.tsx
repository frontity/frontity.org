import React from "react";

const ArrowDown: React.FC<{ color?: string }> = ({ color }) => (
  <svg
    enableBackground="new 0 0 24 24"
    id="Layer_1"
    version="1.0"
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <polyline
      fill="none"
      points="21,8.5 12,17.5 3,8.5 "
      stroke={color || "#000"}
      strokeMiterlimit="10"
      strokeWidth="2"
    />
  </svg>
);

export default ArrowDown;
