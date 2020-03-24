import { Processor } from "@frontity/html2react/types";
import { css } from "frontity";
import React from "react";

import FrontityOrg from "../../types";
import { addAlpha } from "../utils";

const colorClassRegex = /has-([\w-]+)-color/;
const opacityClassRegex = /has-text-opacity-(\d+)/;

export const textColor: Processor<React.HTMLProps<HTMLElement>, FrontityOrg> = {
  name: "text-color",
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className &&
    (node.props.className.split(" ").includes("has-text-color") ||
      node.props.className.split(" ").includes("has-inline-color")),
  processor: ({ node, state }) => {
    if (node.type === "element") {
      // Get the class with the color name.
      const colorClass = node.props.className
        .split(" ")
        .find(
          (name) =>
            colorClassRegex.test(name) &&
            !(
              name.endsWith("text-color") ||
              name.endsWith("inline-color") ||
              name.endsWith("background-color")
            )
        );

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

        // Replace the `css` prop with a new one with `color`.
        node.props.css = css`
          ${node.props.css}
          color: ${color};
          &:hover, &:active{
            color: ${color};
          }
        `;
      }
    }

    return node;
  },
};
