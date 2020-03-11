import React from "react";
import { css } from "frontity";
import { Processor } from "@frontity/html2react/types";
import FrontityOrg from "../../types";
import Logo from "../components/logo";

const buttonLink: Processor<React.HTMLProps<HTMLElement>, FrontityOrg> = {
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className?.split(/ /).includes("wp-block-button__link") &&
    (node as any).parent?.props?.className?.split(/ /).includes("text-button"),

  processor: ({ node, state }) => {
    // just a TS type guard
    if (node.type !== "element") return node;

    // check if we have no-logo class
    if (
      !(node as any).parent?.props?.className?.split(/ /).includes("no-logo")
    ) {
      const element: any = {
        component: Logo,
        props: {
          css: css`
            margin-right: 10px;
          `,
          className: "frontity-logo",
          fill: state.theme.colors.frontity,
          opacity: 0.4
        },
        type: "element"
      };

      // Add the frontity logo
      node.children.unshift(element);
    }

    // Text button
    node.props.css = css`
      ${node.props.css}

      display: inline-block;
      text-decoration: none;
      position: relative;

      color: ${state.theme.colors.frontity};
      padding: 12px 18px;
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
      background-color: transparent;

      transition: transform filter 250ms ease-in-out;

      .frontity-logo {
        transition: transform 300ms ease-in-out;
      }

      &:hover::after {
        width: calc(100% - 60px);
      }

      &:hover {
        filter: opacity(0.91);
        cursor: pointer;
        color: ${state.theme.colors.frontity};

        .frontity-logo {
          transform: translateX(2px);
        }
      }

      /* The ::before and :: after pseudoclasses are used for adding the
         "underline" effect. One is on top of the other and the ::after
         changes it's width on hover
      */
      &::after {
        position: absolute;
        bottom: 6px;
        left: 42px;

        content: "";
        display: block;
        width: 0;
        height: 2px;

        background: ${state.theme.colors.frontity};
        transition: width 0.3s;
      }

      &::before {
        position: absolute;
        bottom: 6px;
        left: 42px;

        content: "";
        display: block;
        width: calc(100% - 60px);
        height: 2px;

        background: ${state.theme.colors.frontity};
        opacity: 0.4;
      }

      &:active {
        transform: translateY(2px);
      }
    `;

    return node;
  }
};

export default buttonLink;
