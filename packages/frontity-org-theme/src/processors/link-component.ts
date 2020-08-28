import Link from "@frontity/components/link";

export const linkComponent = {
  name: "link-component",
  test: ({ node }) =>
    node.type === "element" && node.component === "a" && node.props.href,
  processor: ({ node }) => {
    node.props.link = node.props.href;
    node.component = Link;
    return node;
  },
};
