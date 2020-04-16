import { Processor } from "@frontity/html2react/types";

import Typing from "../components/typing";

export const typingProcessor: Processor = {
  name: "typing-processor",
  priority: 20,
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className &&
    node.props.className.split(" ").includes("typist-terminal"),
  processor: ({ node }) => {
    if (node.type === "element") {
      node.component = Typing;
    }

    return node;
  },
};
