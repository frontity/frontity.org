import React from "react";
import { css } from "frontity";
import { Processor } from "@frontity/html2react/types";
import FrontityOrg from "../../types";

const colorClassRegex = /has-(\w+)-color/;

const textColor: Processor<React.HTMLProps<HTMLElement>, FrontityOrg> = {
  name: "textColor",
  test: ({ node }) => {
    return (
      node.type === "element" &&
      node.props.className &&
      node.props.className.split(/ +/).includes("has-text-color")
    );
  },
  processor: ({ node, state }) => {
    if (node.type === "element") {
      // Get the class with the color name.
      const colorClass = node.props.className
        .split(/ +/)
        .find(
          name =>
            colorClassRegex.test(name) &&
            !(name.endsWith("text-color") || name.endsWith("background-color"))
        );

      if (colorClass) {
        // Get the color name from that class.
        const [, colorName] = colorClass.match(colorClassRegex);

        // Replace the `css` prop with a new one with `color`.
        node.props.css = css`
          ${node.props.css}
          color: ${state.theme.colors[colorName]};
        `;
      }
    }

    return node;
  }
};

export default textColor;
