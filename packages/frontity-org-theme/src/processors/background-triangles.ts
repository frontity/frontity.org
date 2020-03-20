import React from "react";
import { Processor } from "@frontity/html2react/types";
import BackgroundWithTriangles from "../components/background-with-triangles";

const BackgroundTrianglesProcessors: Processor<React.HTMLProps<HTMLElement>> = {
  name: "background-triangles",
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className &&
    node.props.className.split(" ").includes("background-with-triangles"),
  processor: ({ node, state }) => {
    if (node.type === "element") {
      node.component = BackgroundWithTriangles;
    }

    return node;
  }
};
