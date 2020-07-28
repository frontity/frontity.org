import { Element,Processor } from "@frontity/html2react/types";

import FrontityOrg from "../../types";
import Typing from "../components/typing";

export const typingProcessor: Processor<Element, FrontityOrg> = {
  name: "typing-processor",
  priority: 20,
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className &&
    node.props.className?.split(" ").includes("typist-terminal"),
  processor: ({ node }) => {
    node.component = Typing;

    return node;
  },
};
