import { Processor } from "@frontity/html2react/types";

import HeroComponent from "../components/background-with-triangles";

const heroProcessors: Processor<React.HTMLProps<HTMLElement>> = {
  name: "hero",
  test: ({ node }) =>
    node.type === "element" &&
    node?.props.className &&
    node?.props.className.split(" ").includes("hero"),
  processor: ({ node }) => {
    if (node.type === "element") {
      node.component = HeroComponent;
    }

    return node;
  },
};

export default heroProcessors;
