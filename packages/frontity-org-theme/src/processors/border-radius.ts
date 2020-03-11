import { css } from "frontity";

const createBorderRadiusProcessors = (options: {
  [className: string]: ReturnType<typeof css>;
}) => {
  return Object.entries(options).map(([className, style]) => ({
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
          ${style}
        `
      }
    })
  }));
};

export default createBorderRadiusProcessors({
  "has-border-radius-8px": css`
    border-radius: 8px;
  `,
  "has-border-radius-12px": css`
    border-radius: 12px;
  `
});