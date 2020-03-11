import React from "react";
import { css } from "frontity";
import { Processor } from "@frontity/html2react/types";
import FrontityOrg from "../../types";
import Logo from "../components/logo";

const buttons: Processor<React.HTMLProps<HTMLElement>, FrontityOrg> = {
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className?.split(/ /).includes("wp-block-button__link") &&
    (node as any).parent?.props?.className?.split(/ /).includes("big-button"),

  processor: ({ node, state }) => {
    // just a TS type guard
    if (node.type !== "element") return node;

    const element: any = {
      component: Logo,
      props: {
        css: css`
          margin-right: 10px;
        `,
        className: "frontity-logo"
      },
      type: "element"
    };

    // Add the frontity logo
    node.children.unshift(element);

    // Regular (default) button
    node.props.css = css`
      ${node.props.css}
      max-height: 52px;
      max-width: 156px;
      color: white;
      padding: 18px 24px;
      font-weight: 600;
      line-height: 20px;
      font-size: 16px;
      background-color: ${state.theme.colors.frontity};
      border-radius: 8px;
      box-shadow: 0 4px 8px 0 rgba(12, 17, 43, 0.12),
        0 1px 4px 0 rgba(12, 17, 43, 0.16);

      transition: transform filter 250ms ease-in-out;

      .frontity-logo {
        transition: transform 300ms ease-in-out;
      }

      &:hover {
        filter: opacity(0.91);
        cursor: pointer;

        .frontity-logo {
          transform: translateX(2px);
        }
      }

      &:active {
        transform: translateY(2px);
      }
    `;

    return node;
  }
};

export default buttons;
