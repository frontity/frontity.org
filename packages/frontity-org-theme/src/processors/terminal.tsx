import { Processor } from "@frontity/html2react/types";
import { connect, css, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";
import Arrow from "../components/icons/arrow";
import { addAlpha } from "../utils";

const TOP_HEIGHT = 24;

const Dot = styled("span")<{ colors: { [key: string]: string } }>`
  display: inline-block;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  margin-left: 4px;
  margin-top: 8px;
  background-color: ${({ colors }) => addAlpha(colors.white, 0.15)};
`;

const Toggle = styled.a<{ terminalPosition: string }>`
  position: absolute;
  cursor: pointer;
  right: 0.8em;
  visibility: hidden;
  ${(props) =>
    props.terminalPosition &&
    css`
      transform: rotate(${props.terminalPosition === "top" ? "0" : "180"}deg);
    `}

  span {
    color: #ffffff94;
    font-size: 1.5em;
  }
`;

const TogglePosition: React.FC<Connect<FrontityOrg>> = ({ actions, state }) => {
  return (
    <Toggle
      onClick={actions.theme.setHeroTerminalPosition}
      terminalPosition={state.theme.heroTerminalPosition}
      className="change-position"
    >
      <Arrow color="#bbb" />
    </Toggle>
  );
};

const ConnectedTogglePosion = connect(TogglePosition);

const Top = ({ colors }) => (
  <div
    css={css`
      height: 24px;
      background: ${colors.voidblu};
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
      border-bottom: 1px solid ${addAlpha(colors.white, 0.07)};
      position: relative;
    `}
  >
    <Dot
      css={css`
        margin-left: 8px;
      `}
      colors={colors}
    />
    <Dot colors={colors} />
    <Dot colors={colors} />

    <ConnectedTogglePosion />
  </div>
);

export const terminal: Processor<React.HTMLProps<HTMLElement>, FrontityOrg> = {
  name: "terminal",
  test: ({ node }) =>
    node.type === "element" &&
    (node.props?.className?.split(" ").includes("terminal") ||
      node.props?.className?.split(" ").includes("wp-block-code") ||
      node.component === "code"),

  processor: ({ node, state }) => {
    if (node.type !== "element") {
      return node;
    }

    if (node.component === "code") {
      node.props.css = css`
        position: absolute;
        margin-left: 15px;
        margin-top: ${TOP_HEIGHT + 10}px;
      `;

      // This class is used by the CSS for Prism.js syntax highlighter
      node.props.className = "language-javascript";
      return node;
    }

    node.props.css = css`
      ${node.props.css}
      display: flex;
      flex-flow: column nowrap;
      font-family: Courier, monospace;
      font-size: 0.78rem;
      line-height: 1.65;
      background: ${state.theme.colors.voidblu};
      height: 310px;
      width: 400px;
      padding: 0;
      border: 0;
      box-shadow: 0 2px 12px 0 rgba(12, 17, 43, 0.4),
        0 1px 4px 0 rgba(12, 17, 43, 0.39);
      border-radius: 8px;
      overflow: unset;
      max-width: 100%;

      .wp-block-group__inner-container {
        padding-top: 10px;
        padding-bottom: 10px;
        overflow: auto;
        height: 100%; /* need to specify height for overflow to work */

        /* width */
        &::-webkit-scrollbar {
          width: 6px;
        }
        /* Track */
        &::-webkit-scrollbar-track {
          background: rgba(100, 100, 100, 0.5);
          border-radius: 5px;
          margin-bottom: 4px;
        }
        /* Handle */
        &::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 5px;
        }
        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      }

      ol {
        list-style: none;
        counter-reset: counter;
      }

      li {
        counter-increment: counter;
        margin-left: 10px;
      }

      /* Adjust the opacity of the font in the terminal */
      span.has-inline-color {
        opacity: 0.8;
      }

      ol li::before {
        content: counter(counter) " ";
        color: ${addAlpha(state.theme.colors.white, 0.15)};
        margin-right: 15px;
        display: inline-block;
        text-align: right;
        width: 17px;
      }
    `;

    const top: any = {
      type: "element",
      component: Top,
      props: { colors: state.theme.colors },
    };

    node.children.unshift(top);

    return node;
  },
};
