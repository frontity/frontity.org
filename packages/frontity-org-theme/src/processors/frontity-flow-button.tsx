import { Processor } from "@frontity/html2react/types";
import React from "react";

import FrontityOrg from "../../types";
import FlowButton from "../components/frontity-flow-button";

const flowButtonRegex = /^frontity-flow-button-(\w+)$/;

export const flowButton: Processor<
  React.HTMLProps<HTMLElement>,
  FrontityOrg
> = {
  name: "flow-button",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className
      ?.split(" ")
      .some((name) => flowButtonRegex.test(name)),
  processor: ({ node }) => {
    if (node.type !== "element") {
      return node;
    }

    // Get value
    const [, tabNumber] = node.props.className
      .split(" ")
      .find((name) => flowButtonRegex.test(name))
      .match(flowButtonRegex);

    return {
      type: "element",
      component: FlowButton,
      props: {
        tabNumber: parseInt(tabNumber),
        text: (node as any).children[1]?.content,
      },
    };
  },
};
