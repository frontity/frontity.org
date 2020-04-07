import { connect, css, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";
import { addAlpha } from "../utils";

const Button = styled.button`
  margin: 6px;
  height: 52px;
  width: 158px;
  padding: 12px 16px;
  border-radius: 12px;
  border: 0;

  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 16px;

  &:focus {
    outline: none;
  }

  cursor: pointer;

  transition-property: background-color, box-shadow;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;

  ${({ colors, active, number }) =>
    active
      ? css`
          background-color: ${colors.frontity};
          color: white;
          box-shadow: 0 4px 8px 0 rgba(12, 17, 43, 0.12),
            0 1px 4px 0 rgba(12, 17, 43, 0.16);

            &:before {
              content: '${number}';
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
            }
        `
      : css`
          background-color: transparent;
          color: ${colors.primary};

          &:hover {
            filter: opacity(0.9);
            background-color: ${addAlpha(colors.frontity, 0.08)};
          }

          &:before {
              content: '${number}';
              display: inline-block;
              vertical-align: text-bottom;
              padding: 2px;
              width: 20px;
              height: 20px;
              margin-right: 12px;
              font-size: 12px;
              border-radius: 50%;
              color: ${colors.grass};
              background-color: ${addAlpha(colors.grass, 0.15)};
            };
        `};
`;

const FlowButton: React.FC<Connect<
  FrontityOrg,
  { tabNumber: number; text: string; active: boolean }
>> = ({
  tabNumber,
  actions,
  text,
  state,
  // destructuring all the props below so that we don't pass it to the DOM
  libraries,
  roots,
  fills,
}) => {
  const { tabNumber: activeTab, colors } = state.theme;
  const table = { 1: 2, 2: 3, 3: 4, 4: 3 };

  return (
    <Button
      number={tabNumber}
      colors={colors}
      active={activeTab === tabNumber}
      following={tabNumber === table[activeTab]}
      onClick={() => actions.theme.setTabNumber({ tabNumber })}
    >
      {text}
    </Button>
  );
};

export default connect(FlowButton);
