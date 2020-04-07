import { Processor } from "@frontity/html2react/types";
import { css } from "frontity";
import React from "react";

export const reactMadeEasy: Processor<React.HTMLProps<HTMLElement>> = {
  name: "react-made-easy",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("wp-react-made-easy"),
  processor: ({ node }) => {
    if (node.type !== "element") return node;

    node.props.css = css`
      ${node.props.css};

      padding-top: 80px !important;

      & > div > p {
        margin-bottom: 50px;
      }
    `;

    return node;
  },
};
