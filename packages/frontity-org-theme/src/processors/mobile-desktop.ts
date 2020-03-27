import { css } from "frontity";

const createProcessors = (options: {
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
        `,
      },
    }),
  }));
};

export const mobileDesktop = createProcessors({
  "mobile-only": css`
    @media only screen and (min-width: 769px) {
      display: none;
    }
  `,
  "desktop-only": css`
    @media only screen and (max-width: 768px) {
      display: none;
    }
  `,
});
