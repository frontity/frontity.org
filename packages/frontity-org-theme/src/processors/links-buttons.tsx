import { Element, Processor } from "@frontity/html2react/types";
import { css } from "frontity";

import FrontityOrg from "../../types";
import Logo from "../components/logo";

export const links: Processor<Element, FrontityOrg> = {
  test: ({ node }) => node.type === "element" && node.component === "a",
  priority: 5,

  processor: ({ node, state }) => {
    // Add all needed conditions
    const isButton = node.props?.className
      ?.split(/ /)
      .includes("wp-block-button__link");
    const isBig = node.parent.props?.className
      ?.split(/ /)
      .includes("button-big");
    const isButtonText = node.parent.props?.className
      ?.split(/ /)
      .includes("button-text");
    const noLogo = node.parent.props?.className?.split(/ /).includes("no-logo");
    const hasImage = (node as any).children.some(
      (child) => child.type === "element" && child.component === "img"
    );

    if (isButton) {
      //Add common styles for the <a> tag
      node.props.css = css`
        ${node.props.css}
        line-height: 16px;
        font-size: 16px;
        padding: 12px 16px;
        font-weight: 600;
        background-color: ${state.theme.colors.frontity};
        color: ${state.theme.colors.white};
        border-radius: 8px;
        &:active {
          transform: translateY(2px);
        }
        svg,
        img,
        embed,
        object {
          display: inline-block;
        }
      `;
      //Shadow
      if (!isButtonText) {
        node.props.css = css`
          ${node.props.css}
          box-shadow: 0 4px 8px 0 rgba(12,17,43,0.12), 0 1px 4px 0 rgba(12,17,43,0.16);
          &:hover,
          &:active,
          &:focus,
          &:visited {
            filter: opacity(0.9);
            cursor: pointer;
            color: white;
          }
        `;
      }
      //If is Big
      if (isBig) {
        node.props.css = css`
          ${node.props.css}
          padding: 18px 24px;
        `;
      }
      //Add logo if needed
      if (!noLogo && !hasImage) {
        const fillColor = isButtonText
          ? state.theme.colors.frontity
          : state.theme.colors.wall;
        const element: Element = {
          component: Logo,
          props: {
            css: css`
              margin-right: 10px;
            `,
            className: "frontity-logo",
            fill: fillColor,
          },
          type: "element",
        };
        node.props.css = css`
          ${node.props.css}
          transition: transform, filter 250ms ease-in-out;
          .frontity-logo {
            transition: transform 300ms ease-in-out;
          }
          &:hover {
            .frontity-logo {
              transform: translateX(2px);
            }
          }
        `;
        // Add the frontity logo
        node.children.unshift(element);
      } else {
        //If it has a different logo add margin to <img>
        node.props.css = css`
          ${node.props.css}
          img {
            margin-right: 8px;
            transform: translateY(2px);
          }
        `;
      }
      //If is text
      if (isButtonText) {
        node.props.css = css`
          ${node.props.css}
          display: inline-block;
          text-decoration: none;
          position: relative;
          padding: 12px 18px;
          color: ${state.theme.colors.frontity};
          background-color: transparent;
          &:hover,
          &:active,
          &:focus,
          &:visited {
            color: ${state.theme.colors.frontity};
          }
          &:hover::after {
            width: calc(100% - 60px);
          }
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
        `;
      }
    } else {
      //If it's a common link
      node.props.css = css`
        ${node.props.css}
        color: ${state.theme.colors.frontity};
        text-decoration: none;
        outline: none;
        &:focus {
          box-shadow: outline;
        }
        cursor: pointer;
        &:hover,
        &:active {
          opacity: 0.8;
        }
      `;
    }
    return node;
  },
};
