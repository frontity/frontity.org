import { connect, css, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";
import { addAlpha } from "../utils";

const StyledButton = styled.button`
  z-index: 20;
  position: relative;

  margin: 6px;
  margin-left: 20px;
  margin-right: 20px;
  
  height: 52px;
  width: 158px;
  border-radius: 12px;
  border: 0;

  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 16px;

  &:focus {
    outline: none;
  }

  background-color: transparent;
  color: ${({ colors }) => colors.primary};

  cursor: pointer;

  transition: background-color 200ms ease-in-out, color 300ms ease-in-out 300ms;

  &:before {
    content: '${({ number }) => number}';
    display: inline-block;
    padding: 2px;
    vertical-align: text-bottom;
    width: 20px;
    height: 20px;
    margin-right: 12px;
    font-size: 12px;
    border-radius: 50%;
    color: white;
    background-color: ${addAlpha(`#ffffff`, 0.15)};

    transition: all 400ms ease-in-out 200ms;
  };

  ${({ active, colors }) =>
    active
      ? css`
          color: white;
        `
      : css`
          &:hover {
            filter: opacity(0.9);
            background-color: ${addAlpha(colors.frontity, 0.08)};
          }

          &:before {
            color: ${colors.grass};
            background-color: ${addAlpha(colors.grass, 0.15)};
          }
        `}
`;

const FlowButton: React.FC<Connect<
  FrontityOrg,
  { tabNumber: number; text: string; active: boolean }
>> = ({
  tabNumber,
  actions,
  text,
  state,
  // destructuring all the props below so that we don't pass them to the DOM
  libraries,
  roots,
  fills,
}) => {
  const { tabNumber: activeTab, colors } = state.theme;
  const transitionsTable = { 1: 2, 2: 3, 3: 4, 4: 3 };

  return (
    <StyledButton
      number={tabNumber}
      colors={colors}
      active={activeTab === tabNumber}
      following={tabNumber === transitionsTable[activeTab]}
      onClick={() => actions.theme.setTabNumber({ tabNumber })}
    >
      {text}
    </StyledButton>
  );
};

export default connect(FlowButton);
