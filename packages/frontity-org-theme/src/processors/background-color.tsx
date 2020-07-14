import { Element,Processor } from "@frontity/html2react/types";
import { css } from "frontity";

import FrontityOrg from "../../types";
import { addAlpha } from "../utils";

const colorClassRegex = /has-([\w-]+)-background-color/;
const opacityClassRegex = /has-background-opacity-(\d+)/;

export const backgroundColor: Processor<Element, FrontityOrg> = {
  name: "background-color",
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className &&
    node.props.className.split(" ").includes("has-background"),
  processor: ({ node, state }) => {
    // Get the class with the color name.
    const colorClass = node.props.className
      .split(" ")
      .find((name) => colorClassRegex.test(name));

    // Get the color name from that class.
    if (colorClass) {
      // Color code.
      let color: string;

      // Get the color name from that class.
      const [, colorName] = colorClass.match(colorClassRegex);

      // Get the opacity class if exists.
      const opacityClass = node.props.className
        .split(" ")
        .find((name) => opacityClassRegex.test(name));

      if (opacityClass) {
        // Get the value from the opacity class.
        const [, opacityValue] = opacityClass.match(opacityClassRegex);

        // Assign color value with the opacity.
        color = addAlpha(
          state.theme.colors[colorName],
          Number(opacityValue) / 100
        );
      } else {
        // Get the color code from state.
        color = state.theme.colors[colorName];
      }

      // Replace the `css` prop with a new one with `background-color`.
      node.props.css = css`
          ${node.props.css}
          background-color: ${color};
        `;
    }

    return node;
  },
};
