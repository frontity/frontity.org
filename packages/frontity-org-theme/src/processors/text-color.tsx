import React from "react";
import { css } from "frontity";
import { Processor } from "@frontity/html2react/types";
import FrontityOrg from "../../types";

const colorClassRegex = /has-([\w-]+)-color/;
const opacityClassRegex = /has-text-opacity-(\d+)/;

const textColor: Processor<React.HTMLProps<HTMLElement>, FrontityOrg> = {
  name: "textColor",
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className &&
    node.props.className.split(" ").includes("has-text-color"),
  processor: ({ node, state, libraries }) => {
    if (node.type === "element") {
      // Get the class with the color name.
      const colorClass = node.props.className
        .split(" ")
        .find(
          name =>
            colorClassRegex.test(name) &&
            !(name.endsWith("text-color") || name.endsWith("background-color"))
        );

      if (colorClass) {
        // Color code.
        let color: string;

        // Get the color name from that class.
        const [, colorName] = colorClass.match(colorClassRegex);

        // Get the opacity class if exists.
        const opacityClass = node.props.className
          .split(" ")
          .find(name => opacityClassRegex.test(name));

        if (opacityClass) {
          // Get the value from the opacity class.
          const [, opacityValue] = opacityClass.match(opacityClassRegex);

          // Assign color value with the opacity.
          color = libraries.theme.addAlpha(
            state.theme.colors[colorName],
            Number(opacityValue) / 100
          );
        } else {
          // Get the color code from state.
          color = state.theme.colors[colorName];
        }

        // Replace the `css` prop with a new one with `color`.
        node.props.css = css`
          ${node.props.css}
          color: ${color};
        `;
      }
    }

    return node;
  }
};

export default textColor;
