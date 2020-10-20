import Code from "./code";

const prismProcessor = {
  name: "prism-processor",
  test: ({ node }) =>
    node.type === "element" &&
    node.component === "code" &&
    node.parent.component === "pre" &&
    node.parent.props?.className?.match(/language-/),
  processor: ({ node }) => {
    node.props.className = node.parent?.props?.className;
    node.component = Code;
    return node;
  },
};

export default prismProcessor;
