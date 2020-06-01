import { Element,Processor } from "@frontity/html2react/types";

export const deleteTwitterScript: Processor<Element> = {
  test: ({ node }) =>
    node.type === "element" &&
    node.component === "script" &&
    node.props.src.includes("platform.twitter.com"),
  priority: 10,
  name: "deleteTwitterScript",
  processor: () => {
    return null;
  },
};
