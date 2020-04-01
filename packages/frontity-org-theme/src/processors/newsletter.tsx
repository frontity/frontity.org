import { Processor } from "@frontity/html2react/types";
import { css } from "frontity";
import React from "react";

import Newsletter from "../components/newsletter";

export const newsletter: Processor<React.HTMLProps<HTMLElement>> = {
  name: "newsletter",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("newsletter"),

  processor: ({ node }) => {
    if (node.type !== "element") return node;
    node.component = Newsletter;

    return node;
  },
};
