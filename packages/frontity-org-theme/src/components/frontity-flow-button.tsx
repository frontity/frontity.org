import { connect, css, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";
import { addAlpha } from "../utils";

const StyledButton = styled.button<{
  colors: { primary: string; frontity: string; grass: string };
  number: number;
  active: boolean;
}>`
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
  { tabNumber: number; text: string; active: boolean; roots: any; fills: any }
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
  const { flowSectionActiveTab, colors } = state.theme;

  return (
    <StyledButton
      number={tabNumber}
      colors={colors}
      active={flowSectionActiveTab === tabNumber}
      onClick={() => actions.theme.setFlowSectionActiveTab({ tabNumber })}
    >
      {text}
    </StyledButton>
  );
};

export default connect(FlowButton);
