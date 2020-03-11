import React from "react";
import { css } from "frontity";
import { Processor } from "@frontity/html2react/types";
import FrontityOrg from "../../types";

const buttons: Processor<React.HTMLProps<HTMLElement>, FrontityOrg> = {
  test: ({ node }) =>
    node.type === "element" &&
    node.component === "a" &&
    !node.props.className?.split(/ /).includes("wp-block-button__link"),

  processor: ({ node, state }) => {
    // just a TS type guard
    if (node.type !== "element") return node;

    // Link button
    node.props.css = css`
        ${node.props.css}
        color: ${state.theme.colors.frontity};
        text-decoration: none;
        outline: none;
        &:focus {
          box-shadow: outline;
        }
        cursor: pointer;
      `;

    return node;
  }
};

export default buttons;
