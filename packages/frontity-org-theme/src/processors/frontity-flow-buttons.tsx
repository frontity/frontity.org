import { Processor } from "@frontity/html2react/types";
import { css } from "frontity";
import React from "react";

import FrontityOrg from "../../types";

export const flowButtons: Processor<
  React.HTMLProps<HTMLElement>,
  FrontityOrg
> = {
  name: "flow-button",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("frontity-flow-buttons"),
  processor: ({ node }) => {
    if (node.type !== "element") return node;

    node.props.css = css`
      ${node.props.css};

      @media screen and (max-width: 700px) {
        display: none;
      }
    `;

    return node;
  },
};
