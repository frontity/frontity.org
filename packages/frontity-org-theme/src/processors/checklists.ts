import { css } from "frontity";

const checklistsProcessor = {
  name: "checklists",
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className &&
    node.props.className.split(" ").includes("check-marker-list"),
  processor: ({ node }) => ({
    ...node,
    props: {
      ...node.props,
      css: css`
        ${node.props.css}
        list-style: none;

        li {
          position: relative;
          display: flex;
          line-height: 1.3;

          &:before {
            content: url("https://wp.frontity.org/wp-content/uploads/2020/02/check-circle-marker.svg");
            line-height: 0;
            margin-right: 0.4em;
          }
        }
      `
    }
  })
};

export default checklistsProcessor;
