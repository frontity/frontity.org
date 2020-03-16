import { css } from "frontity";
import BackgroundWithTriangles from "../components/background-with-triangles";

const BackgroundTrianglesProcessors = {
  name: "background-triangles",
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className &&
    node.props.className.split(" ").includes("background-with-triangles"),
  processor: ({ node }) => {
    node.component = BackgroundWithTriangles;

    return node;
  }
};
