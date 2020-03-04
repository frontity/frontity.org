import { css } from "frontity";

const createBorderRadiusProcessors = (options: {
  [className: string]: ReturnType<typeof css>;
}) => {
  return Object.entries(options).map(([className, style]) => ({
    name: className,
    test: element =>
      element.type === "element" &&
      element.props.className &&
      element.props.className.split(" ").includes(className),
    process: element => ({
      ...element,
      props: {
        ...element.props,
        css: css`
          ${element.props.css}
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
