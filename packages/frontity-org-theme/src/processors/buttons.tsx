import React from "react";
import { css } from "frontity";
import { Processor, Node } from "@frontity/html2react/types";
import FrontityOrg from "../../types";
import Logo from "../components/logo";

const buttons: Processor<React.HTMLProps<HTMLElement>, FrontityOrg> = {
  test: ({ node }) =>
    node.type === "element" &&
    (node.component === "a" ||
      node.props.className?.split(/ /).includes("wp-block-button__link")),

  processor: ({ node, state }) => {
    // just a TS type guard
    if (node.type !== "element") return node;

    const children: Node<React.HTMLProps<HTMLElement>>[] = node.children;

    // Check if the element has an image that we should use
    const logoComponent = children.find(
      child => child.type === "element" && child.component === "img"
    );
    // If it exists, add it
    if (!logoComponent) {
      node.children.unshift({
        component: Logo,
        props: {},
        type: "element"
      });
    }

    const hasClassName = node.props.className
      ?.split(/ /)
      .includes("wp-block-button__link");

    // Link button
    if (!hasClassName) {
      node.props.css = css`
        ${node.props.css}
        color: ${state.theme.colors.frontity};
        text-decoration: none;
        outline: none;
        &:focus {
          box-shadow: outline;
        }
        cursor: pointer;
      `;
    }

    const parent: Node<React.HTMLProps<HTMLElement>> = node.parent;

    if (parent.props.className?.split(/ /).includes("wp-block-button")) {
      // Big Button
      if (parent.props.className?.split(/ /).includes("big-button")) {
        node.props.css = css`
          ${node.props.css}
          color: white;
          background-color: ${state.theme.colors.frontity};
          border-radius: 8px;
          box-shadow: 0 4px 8px 0 rgba(12, 17, 43, 0.12),
            0 1px 4px 0 rgba(12, 17, 43, 0.16);

          &:hover {
            filter: brightness(0.88);
            cursor: pointer;
          }
        `;
      }

      // Text Button
      else if (parent.props.className?.split(/ /).includes("text-button")) {
        node.props.css = css`
          ${node.props.css}
          color: ${state.theme.colors.frontity};
          text-decoration: none;
          outline: none;
          &:focus {
            box-shadow: outline;
          }
          cursor: pointer;
        `;
      } else {
        // Regular Button
        node.props.css = css`
          ${node.props.css}
          height: 28px;
          width: 90px;
          color: white;
          padding: 8px 19px;
          font-size: 16px;
          line-height: 16px;
          background-color: ${state.theme.colors.frontity};
          border-radius: 8px;
          box-shadow: 0 4px 8px 0 rgba(12, 17, 43, 0.12),
            0 1px 4px 0 rgba(12, 17, 43, 0.16);

          &:hover {
            filter: brightness(0.88);
            cursor: pointer;
          }
        `;
      }
    }

    return node;
  }
};

export default buttons;
