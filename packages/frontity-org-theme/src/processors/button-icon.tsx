import React from "react";
import { css } from "frontity";
import { Processor } from "@frontity/html2react/types";
import FrontityOrg from "../../types";

const buttons: Processor<React.HTMLProps<HTMLElement>, FrontityOrg> = {
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className?.split(/ /).includes("wp-block-button__link") &&
    (node as any).parent?.props?.className?.split(/ /).includes("button-icon"),

  processor: ({ node, state }) => {
    // just a TS type guard
    if (node.type !== "element") return node;

    // Regular (default) button
    node.props.css = css`
      ${node.props.css}
      max-height: 52px;
      max-width: 156px;
      color: ${state.theme.colors.frontity};
      padding: 18px 24px;
      text-align: center;
      line-height: 16px;
      font-weight: 600;
      font-size: 16px;
      background-color: ${state.theme.colors.wall};
      border-radius: 8px;
      box-shadow: 0 4px 8px 0 rgba(12, 17, 43, 0.12),
        0 1px 4px 0 rgba(12, 17, 43, 0.16);

      transition: transform filter 150ms ease-in-out;

      &:hover {
        cursor: pointer;
        color: ${state.theme.colors.frontity};
        filter: opacity(0.85);
        transform: translateY(2px);
      }
    `;

    return node;
  }
};

export default buttons;
