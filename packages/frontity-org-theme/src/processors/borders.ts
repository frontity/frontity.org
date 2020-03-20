import { css } from "frontity";

function createBordersProcessors(obj: {
  [prop: string]: ReturnType<typeof css>;
}) {
  return Object.entries(obj).map(([className, style]) => ({
    name: "borders",
    test: ({ node }) =>
      node.type === "element" &&
      node.props.className?.split(/ /).includes(className),

    processor: ({ node }) => {
      // Do nothing if this node is not an `node` (just a type guard).
      if (node.type !== "element") return node;

      // Return the new component
      return {
        ...node,
        props: {
          ...node.props,
          css: css`
            ${node.props.css};
            ${style};
          `
        }
      };
    }
  }));
}

export const borders = createBordersProcessors({
  "has-all-borders": css`
    border: 1px solid rgba(15, 28, 100, 0.12);
  `,
  "has-left-border": css`
    border-left: 1px solid rgba(15, 28, 100, 0.12);
  `,
  "has-right-border": css`
    border-right: 1px solid rgba(15, 28, 100, 0.12);
  `,
  "has-bottom-border": css`
    border-bottom: 1px solid rgba(15, 28, 100, 0.12);
  `,
  "has-top-border": css`
    border-top: 1px solid rgba(15, 28, 100, 0.12);
  `
});
