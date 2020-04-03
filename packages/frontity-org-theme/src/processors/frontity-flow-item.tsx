import { Processor } from "@frontity/html2react/types";
import { css } from "frontity";
import React from "react";

import FrontityOrg from "../../types";

const flowItemRegex = /^frontity-flow-item-(\w+)$/;

export const flowItem: Processor<React.HTMLProps<HTMLElement>, FrontityOrg> = {
  name: "flow-item",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").some((name) => flowItemRegex.test(name)),
  processor: ({ node, state }) => {
    if (node.type !== "element") {
      return node;
    }

    // Get value
    const [, tabNumber] = node.props.className
      .split(" ")
      .find((name) => flowItemRegex.test(name))
      .match(flowItemRegex);

    if (state.theme.tabNumber !== parseInt(tabNumber)) {
      node.props.css = css`
        @media screen and (min-width: 701px) {
          display: none;
        }
      `;
    }

    node.props.css = css`
      ${node.props.css};

      @media screen and (max-width: 700px) {
        scroll-snap-align: start;

        width: 100%;
        height: auto;
      }
    `;

    return node;
  },
};
