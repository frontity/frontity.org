import { Processor } from "@frontity/html2react/types";
import { css } from "frontity";
import React from "react";

import FrontityOrg from "../../types";
import { addAlpha } from "../utils";

const borderRadiusRegex = /has-border-radius-(\d+)px/;

export const specialIcons: Processor<
  React.HTMLProps<HTMLElement>,
  FrontityOrg
> = {
  name: "special-icons",
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className &&
    node.props.className.split(" ").includes("special-icon"),
  processor: ({ node, state }) => {
    if (node.type === "element") {
      const classNames = node.props.className.split(" ");

      const hasBackground = classNames.includes("has-background");
      const hasBorderRadius = classNames.some(c => borderRadiusRegex.test(c));

      const defaultBgColor = addAlpha(state.theme.colors.primary, 0.08);

      node.props.css = css`
        ${node.props.css}
        ${!hasBackground && `background-color: ${defaultBgColor};`}
        ${!hasBorderRadius && `border-radius: 12px;`}
        height: 60px;
        width: 60px;
        position: relative;

        /* Remove padding and margin using a more-specific selector */
        &.wp-block-group {
          padding: 0;
          margin: 0;
        }

        & > div.wp-block-group__inner-container {
          /* Change inner container dimensions */
          width: 100%;
          height: 100%;
          /* Make content to be centered */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        figure.wp-block-image {
          /* Remove margins */
          margin-block-start: 0;
          margin-block-end: 0;
          margin-inline-start: 0;
          margin-inline-end: 0;

          /* Change img's display to block for better positioning */
          img {
            display: block;
          }
        }
      `;
    }

    return node;
  }
};
