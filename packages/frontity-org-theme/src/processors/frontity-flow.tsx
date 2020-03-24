import { Processor } from "@frontity/html2react/types";
import { css } from "frontity";
import React from "react";

import FrontityOrg from "../../types";

export const frontityFlow: Processor<
  React.HTMLProps<HTMLElement>,
  FrontityOrg
> = {
  name: "frontity-flow",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("frontity-flow-all-items"),
  processor: ({ node, state }) => {
    if (node.type !== "element") {
      return node;
    }

    return node;
  },
};
