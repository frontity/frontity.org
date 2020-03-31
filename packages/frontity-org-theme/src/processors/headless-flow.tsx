import { Node, Processor } from "@frontity/html2react/types";
import { css, styled } from "frontity";
import React from "react";

import FrontityOrg from "../../types";
import { addAlpha } from "../utils";

const Dot = styled.div<{ color: string; bigger?: boolean }>`
  height: 8px;
  width: 8px;

  ${({ bigger }) =>
    bigger &&
    css`
      height: 14px;
      width: 14px;
    `}

  border-radius: 50%;
  margin: 6px;
  background: ${({ color }) => color};
`;

const Dots: React.SFC<{ primary: string; grass: string; plain }> = ({
  primary,
  grass,
  plain,
}) => (
  <div
    css={css`
      &:nth-child(2n) {
        margin-left: -85px;
        margin-right: -100px;
      }

      &:nth-child(4n) {
        margin-left: -100px;
        margin-right: -85px;
      }

      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      margin-left: -100px;
      margin-right: -100px;
      margin-bottom: 78px;
      z-index: -1;
    `}
  >
    {plain ? (
      Array.from({ length: 12 }).map((e, i) => (
        <Dot key={i} color={addAlpha(primary, 0.12)}></Dot>
      ))
    ) : (
      <>
        <Dot color={addAlpha(primary, 0.12)}></Dot>
        <Dot color={addAlpha(primary, 0.12)}></Dot>
        <Dot color={addAlpha(grass, 0.2)}></Dot>
        <Dot color={addAlpha(grass, 0.4)}></Dot>
        <Dot color={addAlpha(grass, 0.6)}></Dot>
        <Dot color={grass} bigger></Dot>
        <Dot color={addAlpha(primary, 0.12)}></Dot>
        <Dot color={addAlpha(primary, 0.12)}></Dot>
        <Dot color={addAlpha(primary, 0.12)}></Dot>
        <Dot color={addAlpha(primary, 0.12)}></Dot>
        <Dot color={addAlpha(primary, 0.12)}></Dot>
        <Dot color={addAlpha(primary, 0.12)}></Dot>
        <Dot color={addAlpha(primary, 0.12)}></Dot>
        <Dot color={addAlpha(primary, 0.12)}></Dot>
      </>
    )}
  </div>
);

export const headlessFlow: Processor<
  React.HTMLProps<HTMLElement>,
  FrontityOrg
> = {
  name: "headlessFlow",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("headless-flow"),
  processor: ({ node, state }) => {
    if (node.type !== "element") return node;

    node.props.css = css`
      flex-wrap: nowrap;

      /* This is to override a default gutenberg style for desktiop columns */
      .wp-block-column {
        margin-left: 0px;
      }

      @media screen and (max-width: 750px) {
        flex-direction: column;
      }

      @media screen and (max-width: 750px) {
        .wp-block-group__inner-container {
          display: grid;
          grid-template-columns: 1fr 60%;
          grid-template-rows: 1fr;
          align-items: center;
          justify-content: left;

          p {
            padding-bottom: 27px;
            padding-left: 15px;
            text-align: left;
          }
        }
      }
    `;

    const dotsWithBeep: Node<
      React.HTMLProps<HTMLElement> & { primary: string; grass: string }
    > = {
      type: "element",
      component: Dots,
      props: {
        primary: state.theme.colors.primary,
        grass: state.theme.colors.grass,
      },
    };

    const plainDots: Node<
      React.HTMLProps<HTMLElement> & { plain: true; primary: string }
    > = {
      type: "element",
      component: Dots,
      props: { plain: true, primary: state.theme.colors.primary },
    };

    node.children = [
      node.children[0],
      dotsWithBeep,
      node.children[1],
      plainDots,
      node.children[2],
    ];

    return node;
  },
};
