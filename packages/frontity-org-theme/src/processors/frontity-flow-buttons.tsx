import { Node, Processor } from "@frontity/html2react/types";
import { css, styled } from "frontity";
import React from "react";

import FrontityOrg from "../../types";
import { FLOW_SECTION_BREAKPOINT } from "./frontity-flow-items";

const FLOW_SECTION_WIDTH = FLOW_SECTION_BREAKPOINT - 50;

const SlidingButton = styled.div<{
  frontity: string;
  activeTab: number;
}>`
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;

  margin: 6px;
  margin-right: 20px;
  margin-left: 20px;

  height: 52px;
  width: 158px;
  border-radius: 12px;
  border: 0;

  background-color: ${({ frontity }) => frontity};
  color: white;
  box-shadow: 0 4px 8px 0 rgba(12, 17, 43, 0.12),
    0 1px 4px 0 rgba(12, 17, 43, 0.16);

  transition: transform 600ms ease-in-out;

  ${({ activeTab }) =>
    activeTab === 1
      ? css`
          transform: translateX(0);
        `
      : activeTab === 2
      ? css`
          transform: translateX(${FLOW_SECTION_WIDTH / 4}px);
        `
      : activeTab === 3
      ? css`
          transform: translateX(${FLOW_SECTION_WIDTH / 2}px);
        `
      : css`
          transform: translateX(${FLOW_SECTION_WIDTH * (3 / 4)}px);
        `};

  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 16px;

  &:focus {
    outline: none;
  }
`;

export const flowButtons: Processor<
  React.HTMLProps<HTMLElement>,
  FrontityOrg
> = {
  name: "flow-buttons",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("frontity-flow-buttons"),
  processor: ({ node, state }) => {
    if (node.type !== "element") return node;

    node.props.css = css`
      ${node.props.css};

      z-index: 10;

      position: relative;
      width: ${FLOW_SECTION_WIDTH}px;

      margin: 0 auto;
      margin-bottom: 24px;

      display: flex;
      flex-flow: row nowrap;
      justify-items: center;

      @media screen and (max-width: ${FLOW_SECTION_BREAKPOINT}px) {
        display: none;
      }
    `;

    const slidingButton: Node<
      React.HTMLProps<HTMLElement> & { activeTab: number; frontity: string }
    > = {
      type: "element",
      component: SlidingButton,
      props: {
        activeTab: state.theme.flowSectionActiveTab,
        frontity: state.theme.colors.frontity,
      },
    };

    node.children.push(slidingButton);

    return node;
  },
};
