import { css } from "frontity";

const createParagraphProcessor = (options: {
  [className: string]: ReturnType<typeof css>;
}) => {
  return Object.entries(options).map(([className, styles]) => ({
    name: className,
    test: ({ node }) =>
      node.type === "element" &&
      node.props.className &&
      node.props.className.split(" ").includes(className),
    processor: ({ node }) => ({
      ...node,
      props: {
        ...node.props,
        css: css`
          ${node.props.css}
          ${styles}
        `,
      },
    }),
  }));
};

export const paragraph = createParagraphProcessor({
  "has-small-font-size": css`
    font-size: 14px;
    line-height: 20px;
  `,
  "has-normal-font-size": css`
    font-size: 16px;
    line-height: 24px;
  `,
  "has-large-font-size": css`
    font-size: 20px;
    line-height: 32px;
  `,
});
