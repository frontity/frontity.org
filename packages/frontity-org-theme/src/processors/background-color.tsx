import React from "react";
import { css } from "frontity";
import { Processor } from "@frontity/html2react/types";
import FrontityOrg from "../../types";

const colorClassRegex = /has-(\w+)-background-color/;

const backgroundColor: Processor<React.HTMLProps<HTMLElement>, FrontityOrg> = {
  name: "backgroundColor",
  test: ({ node }) => {
    return (
      node.type === "element" &&
      node.props.className &&
      node.props.className.split(/ +/).includes("has-background")
    );
  },
  processor: ({ node, state }) => {
    if (node.type === "element") {
      // Get the class with the color name.
      const colorClass = node.props.className
        .split(/ +/)
        .find(name => colorClassRegex.test(name));

      // Get the color name from that class.
      const [, colorName] = colorClass.match(colorClassRegex);

      // Replace the `css` prop with a new one with `background-color`.
      node.props.css = css`
        ${node.props.css || ""}
        background-color: ${state.theme.colors[colorName]};
      `;
    }

    return node;
  }
};

export default backgroundColor;
