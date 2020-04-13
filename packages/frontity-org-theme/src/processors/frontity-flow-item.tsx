import { Processor } from "@frontity/html2react/types";
import { css } from "frontity";
import React from "react";

import FrontityOrg from "../../types";
import FlowItem from "../components/frontity-flow-item";
import { FLOW_SECTION_BREAKPOINT } from "./frontity-flow-items";

const flowItemRegex = /^frontity-flow-item-(\w+)$/;

export const flowItem: Processor<React.HTMLProps<HTMLElement>, FrontityOrg> = {
  name: "flow-item",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").some((name) => flowItemRegex.test(name)),

  // TODO: The `any` is a workaround until we have better types for processors
  // because TS complains when I add new props like `tag` & `tabNumber` below.
  processor: ({ node }: any) => {
    if (node.type !== "element") {
      return node;
    }

    // Get value
    const [, tabNumber] = node.props.className
      .split(" ")
      .find((name) => flowItemRegex.test(name))
      .match(flowItemRegex);

    node.props.css = css`
      ${node.props.css};

      @media screen and (max-width: ${FLOW_SECTION_BREAKPOINT}px) {
        scroll-snap-align: start;

        width: 100%;
        height: auto;
      }

      a {
        margin-left: -18px;
      }
    `;

    node.props.tag = node.component;
    node.props.tabNumber = parseInt(tabNumber);
    node.component = FlowItem;

    return node;
  },
};
