import { css } from "frontity";

const boxShadowProcessor = {
  name: "box-shadow",
  test: node =>
    node.type === "element" &&
    node.props.className &&
    node.props.className.split(" ").includes("has-shadow"),
  processor: ({ node }) => ({
    ...node,
    props: {
      ...node.props,
      css: css`
        ${node.props.css}
        border: solid 1px rgba(15,28,100,0.12);
      `
    }
  })
};

export default boxShadowProcessor;
