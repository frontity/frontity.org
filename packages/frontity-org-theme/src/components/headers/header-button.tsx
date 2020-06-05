import { css } from "frontity";

const burgerIcon = ({ color }: { color: string }) => css`
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

const closeIcon = ({ color }: { color: string }) => css`
  position: relative;

  &:before,
  &:after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    height: 2px;
    width: 18px;
    border-radius: 1px;
    background-color: ${color};
  }
  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

import React, { MouseEventHandler } from "react";

const headerButton = ({
  color,
  isMenuOpen,
}: {
  color: string;
  isMenuOpen: boolean;
}) => css`
  /* Only show the button on mobile */
  @media only screen and (min-width: 866px) {
    display: none;
  }

  cursor: pointer;
  border: none;
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: transparent;

  /* Change icon */
  ${isMenuOpen ? closeIcon({ color }) : burgerIcon({ color })};
`;

const HeaderButton: React.FC<{
  color: string;
  onClick: MouseEventHandler;
  isMenuOpen: boolean;
}> = ({ color, onClick, isMenuOpen }) => (
  <button
    css={headerButton({ color, isMenuOpen })}
    aria-label="Toggle Menu"
    onClick={onClick}
  />
);

export default HeaderButton;
