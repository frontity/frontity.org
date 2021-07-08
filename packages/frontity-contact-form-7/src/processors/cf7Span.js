import Span from "../components/Span";

export const cf7Span = {
  name: "cf7Span",
  test: ({ node }) =>
    node.component === "span" &&
    /wpcf7-form-control-wrap/.test(node.props.className),
  processor: ({ node }) => {
    let spanKey = "";

    if (node.children.length > 0) {
      spanKey = node.children[0].props.name;
    }

    node.props.spanKey = spanKey;

    node.component = Span;
    return node;
  },
};
