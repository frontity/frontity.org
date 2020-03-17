import React from "react";
import { css } from "frontity";
import { Processor } from "@frontity/html2react/types";
import FrontityOrg from "../../types";

const backgroundColor: Processor<React.HTMLProps<HTMLElement>, FrontityOrg> = {
  name: "backgroundColor",
  test: ({ node }) =>
    node.type === "element" &&
    (node.props?.className?.split(" ").includes("terminal") ||
      node.props?.className?.split(" ").includes("has-code")),

  processor: ({ node, state }) => {
    if (node.type !== "element") {
      return node;
    }

    node.props.css = css`
      ${node.props.css}
      background-color: red;
      font-family: monospace;

      .ol,
      li {
        list-style: none;
      }
    `;

    return node;
  }
};

export default backgroundColor;
