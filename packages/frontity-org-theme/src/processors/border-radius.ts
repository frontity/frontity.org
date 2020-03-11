import { css } from "frontity";

const borderRadiusProcessor = {
  name: "border-radius",
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className &&
    node.props.className.split(" ").includes("has-border-radius"),
  processor: ({ node }) => {
    const radiusRegExp = /^has-border-radius-(\w+)$/;

    // Get border-radius class
    const radiusClass = node.props.className
      .split(" ")
      .find(name => radiusRegExp.test(name));

    // Get value of radius
    const [, radius] = radiusClass.match(radiusRegExp);

    return {
      ...node,
      props: {
        ...node.props,
        css: css`
          ${node.props.css}
          border-radius: ${radius};
        `
      }
    };
  }
};

export default borderRadiusProcessor;
