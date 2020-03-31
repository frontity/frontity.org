import { Processor } from "@frontity/html2react/types";
import { css, styled } from "frontity";
import React from "react";

import FrontityOrg from "../../types";
import { addAlpha } from "../utils";

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
      .wp-block-column:nth-child(2n) {
        margin-left: 0px;
      }

      @media screen and (max-width: 750px) {
        flex-direction: column;
      }

      div.wp-block-column:not(:first-child) {
        figure:before {
          content: "ooooo";
          position: absolute;
          top: 37%;
          z-index: -1;
        }
        figure {
          position: relative;
        }
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

    return node;
  },
};
