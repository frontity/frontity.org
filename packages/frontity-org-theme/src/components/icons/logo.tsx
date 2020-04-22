import React from "react";

const Logo: React.FC<{ color?: string }> = ({ color }) => (
  <svg
    width="55"
    height="30"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 20"
  >
    <g fill={color} fillRule="evenodd" opacity="0.6">
      <path d="M7.681 5.645l.009.008L1.983 11 0 9.142l4.042-3.787L.31 1.858 2.293 0 8 5.347l-.319.298z" />
      <path d="M13.681 5.645l.009.008L7.983 11 6 9.142l4.042-3.787L6.31 1.858 8.293 0 14 5.347l-.319.298z" />
    </g>
  </svg>
);

export default Logo;
