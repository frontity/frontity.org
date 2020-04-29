import { Processor } from "@frontity/html2react/types";
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
    node.children[0]["children"].map((item) => {
      const prop = item.props.className;
      node.props[prop] = item.children[0].content;
    });

    return node;
  },
};
