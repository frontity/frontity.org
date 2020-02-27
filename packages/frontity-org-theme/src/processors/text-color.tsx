import React from "react";
import { css } from "frontity";
import { Processor } from "@frontity/html2react/types";

const colorClassRegex = /has-(\w+)-color/;

const textColor: Processor<React.HTMLProps<HTMLElement>> = {
  name: "textColor",
  test: element => {
    return (
      element.type === "element" &&
      element.props.className &&
      element.props.className.split(/ +/).includes("has-text-color")
    );
  },
  process: element => {
    // Do nothing if this element is not an `element` (just a type guard).
    if (element.type !== "element") return element;

    // Get the class with the color name.
    const colorClass = element.props.className
      .split(/ +/)
      .find(
        name =>
          colorClassRegex.test(name) &&
          !(name.endsWith("text-color") || name.endsWith("background-color"))
      );

    // Get the color name from that class.
    const [, colorName] = colorClass.match(colorClassRegex);

    // Return the new component
    return {
      ...element,
      props: {
        ...element.props,
        css: css`
          ${element.props.css || ""}
          color: ${colorName};
        `
      }
    };
  }
};

export default textColor;
