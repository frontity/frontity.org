import { Node, Processor } from "@frontity/html2react/types";
import { css } from "frontity";
import React from "react";

import FrontityOrg from "../../types";
import Dots from "../components/dots";

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

      /* This is to override a default gutenberg style for desktop columns */
      .wp-block-column {
        margin-left: 0px;
      }

      /* Make a single column on small screens */
      @media screen and (max-width: 700px) {
        flex-direction: column;
      }

      /* Override the default column layout inside the container */
      @media screen and (max-width: 700px) {
        .wp-block-group__inner-container {
          display: grid;
          grid-template-columns: 1fr 70%;
          grid-template-rows: 1fr;
          align-items: start;
          justify-content: left;

          p {
            padding-bottom: 27px;
            padding-left: 15px;
            padding-top: 12px;
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
