import { Processor } from "@frontity/html2react/types";
import { css } from "frontity";
import React from "react";

import FrontityOrg from "../../types";
import { addAlpha } from "../utils";

export const horizontalSeparator: Processor<
  React.HTMLProps<HTMLElement>,
  FrontityOrg
> = {
  name: "horizontalSeparator",
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className &&
    node.props.className.split(" ").includes("wp-block-separator"),
  processor: ({ node, state }) => {
    if (node.type === "element") {
      node.props.css = css`
        ${node.props.css}
        border-bottom-color: ${addAlpha(state.theme.colors.primary, 0.12)};
      `;
    }

    return node;
  },
};
