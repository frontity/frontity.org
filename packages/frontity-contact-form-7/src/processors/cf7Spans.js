import Span from "../components/Span";

export const cf7Spans = {
  name: "cf7Spans",
  test: ({ node }) =>
    node.component === "span" &&
    /wpcf7-form-control-wrap/.test(node.props.className),
  processor: ({ node }) => {
    node.component = Span;
    return node;
  },
};
