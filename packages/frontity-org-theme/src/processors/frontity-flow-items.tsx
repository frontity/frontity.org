import { Node, Processor } from "@frontity/html2react/types";
import { connect, css, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";
import { addAlpha } from "../utils";

export const FLOW_SECTION_BREAKPOINT = 800;

const Dot = styled.div<{ active: boolean; color: string }>`
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background: ${({ active, color }) =>
    active ? color : addAlpha(color, 0.12)};
  margin: 6px;
`;

const Dots: React.FC<Connect<FrontityOrg>> = connect(({ state }) => (
  <span
    css={css`
      width: 100%;
      display: flex;
      justify-content: center;

      padding: 20px;

      @media screen and (min-width: ${FLOW_SECTION_BREAKPOINT + 1}px) {
        display: none;
      }
    `}
  >
    {Array.from({ length: 4 }, (_, i) => (
      <Dot
        key={i}
        active={state.theme.flowSectionActiveTab === i + 1}
        color={state.theme.colors.primary}
      />
    ))}
  </span>
));

export const flowItems: Processor<React.HTMLProps<HTMLElement>, FrontityOrg> = {
  name: "flow-items",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("frontity-flow-all-items"),
  processor: ({ node, state }) => {
    if (node.type !== "element") return node;

    const { flowSectionActiveTab } = state.theme;

    node.props.css = css`
      ${node.props.css};

      /* This is so that we can position the "dots" absolutely on mobile */
      position: relative;

      overflow-x: hidden;

      & > .wp-block-group__inner-container {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 100%;
        grid-gap: 5rem;

        @media screen and (min-width: ${FLOW_SECTION_BREAKPOINT + 1}px) {
          transform: translateX(
            calc(
              -${(flowSectionActiveTab - 1) * 100}% - ${(flowSectionActiveTab - 1) * 5}rem
            )
          );

          transition: transform 600ms ease-in-out;
        }

        @media screen and (max-width: ${FLOW_SECTION_BREAKPOINT}px) {
          overflow-x: scroll;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }
      }
    `;

    const dots: Node<React.HTMLProps<HTMLElement>> = {
      type: "element",
      component: Dots,
      props: {},
    };

    node.children = [...node.children, dots];

    return node;
  },
};
