import React from "react";
import { css, styled } from "frontity";
import { Processor } from "@frontity/html2react/types";

const Dot = styled.span`
  display: inline-block;
  width: 9px;
  height: 9px;
  margin-left: 5px;
  border-radius: 100%;
  background-color: rgba(15, 28, 100, 0.2);
`;

const Top = () => (
  <div
    css={css`
      height: 32px;
      padding-left: 10px;
    `}
  >
    <Dot />
    <Dot />
    <Dot />
  </div>
);

const imageFrame: Processor<React.HTMLProps<HTMLElement>> = {
  name: "border-radius",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("has-browser-window"),

  processor: ({ node }) => {
    if (node.type !== "element") return node;

    const topFrame: any = {
      type: "element",
      component: Top
    };

    node.children.unshift(topFrame);

    node.props.css = css`
      ${node.props.css};
      box-shadow: 0 -1px 0 0 rgba(12, 17, 43, 0.04);
      background-color: rgba(12, 17, 43, 0.02);
      display: inline-flex;
      flex-flow: column nowrap;

      img {
        border-bottom-left-radius: 11px;
        border-bottom-right-radius: 11px;
      }
    `;

    return node;
  }
};

export default imageFrame;
