import { Processor } from "@frontity/html2react/types";
import { css } from "frontity";
import React from "react";

import FrontityOrg from "../../types";
import { addAlpha } from "../utils";

export const scrollingSection: Processor<
  React.HTMLProps<HTMLElement>,
  FrontityOrg
> = {
  name: "scrolling-section",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("carrousel-bar"),
  processor: ({ node, state }) => {
    if (node.type !== "element") return node;

    const thumbColor = state.theme.colors.frontity;
    const trackColor = addAlpha(state.theme.colors.primary, 0.08);

    node.props.css = css`
      ${node.props.css};

      /* This is the default breakpoint for Gutenberg's columns */
      @media only screen and (max-width: 599px) {
        overflow-x: auto;

        /* Display the content in a row */
        &.wp-block-group > .wp-block-group__inner-container {
          padding: 24px 16px;
          display: flex;
        }

        /* Make columns block to display the content in a row */
        .wp-block-columns {
          flex-direction: row;
          flex-wrap: nowrap;
          flex-shrink: 0;
          margin: 0;
        }
        .wp-block-column {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          flex-basis: auto !important; /* Gutenberg's CSS uses 'important'! */

          /* Set the size of the elements inside each column */
          & > * {
            flex-shrink: 0;
            max-width: 300px;
            margin: 0;
            padding: 0 26px 0 0;
          }

          /* Change right padding for the last element */
          &:last-child > *:last-child {
            padding-right: 16px;
          }
        }

        /* Scrollbar */

        /* Chrome & Webkit browsers */
        &::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: ${thumbColor};
          border-radius: 2px;
        }
        &::-webkit-scrollbar-track {
          background-color: ${trackColor};
          border-radius: 2px;
        }
        &::-webkit-scrollbar-button {
          background-color: transparent;
          /* This create the padding effect at the scrollbar ends */
          width: 16px;
          height: 16px;
        }

        /* Firefox */
        scrollbar-color: ${thumbColor} ${trackColor};
        scrollbar-width: thin;
      }
    `;

    return node;
  },
};
