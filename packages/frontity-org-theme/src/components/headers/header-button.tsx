import { css } from "frontity";
import React, { MouseEventHandler } from "react";

const burgerMenu = ({ color }: { color: string }) => css`
  @media only screen and (min-width: 866px) {
    display: none;
  }

  cursor: pointer;

  padding: 0;
  border: none;
  background-color: transparent;
  width: 24px;
  height: 24px;

  &:after {
    content: " ";
    display: block;
    box-sizing: border-box;
    margin: 6px 3px;
    width: 18px;
    height: 12px;
    background: linear-gradient(
      to bottom,
      ${color} 0px,
      ${color} 2px,
      transparent 2px,
      transparent 5px,
      ${color} 5px,
      ${color} 7px,
      transparent 7px,
      transparent 10px,
      ${color} 10px,
      ${color} 12px
    );
  }
`;

const HeaderButton: React.FC<{ color: string; onClick: MouseEventHandler }> = ({
  color,
  onClick,
}) => <button css={burgerMenu({ color })} onClick={onClick} />;

export default HeaderButton;
