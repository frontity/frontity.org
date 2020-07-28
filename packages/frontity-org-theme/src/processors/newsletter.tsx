import { Element,Processor } from "@frontity/html2react/types";

import Newsletter from "../components/newsletter";

export const newsletter: Processor<Element> = {
  name: "newsletter",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("newsletter"),

  processor: ({ node }) => {
    node.component = Newsletter;
    node.children[0]["children"].map((item) => {
      const prop = item.props.className;
      node.props[prop] = item.children[0].content;
    });

    return node;
  },
};
