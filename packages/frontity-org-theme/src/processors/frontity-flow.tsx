import { Node, Processor } from "@frontity/html2react/types";
import { stringify } from "himalaya";
import React from "react";

import FrontityOrg from "../../types";
import Flow from "../components/frontity-flow";

export const frontityFlow: Processor<
  React.HTMLProps<HTMLElement>,
  FrontityOrg
> = {
  name: "frontity-flow",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("frontity-flow"),
  processor: ({ node }) => {
    if (node.type !== "element") {
      return node;
    }

    const element: Node<React.HTMLProps<HTMLElement> & { rendered: string }> = {
      type: "element",
      component: Flow,
      props: {
        rendered: stringify(node),
      },
    };

    return element;
  },
};
