import React from "react";
import { css } from "frontity";
import { Processor } from "@frontity/html2react/types";
import TopBar from "../components/window-top-bar";

const imageFrame: Processor<React.HTMLProps<HTMLElement>> = {
  name: "border-radius",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("has-browser-window"),

  processor: ({ node }) => {
    if (node.type !== "element") return node;

    const topFrame: any = {
      type: "element",
      component: TopBar,
      props: {}
      // we need to pass empty props, because other processors might
      // expect `.props` to exist
    };

    node.children.unshift(topFrame);

    node.props.css = css`
      ${node.props.css};
      box-shadow: 0 -1px 0 0 rgba(12, 17, 43, 0.04);
      background-color: rgba(12, 17, 43, 0.02);
      display: inline-flex;
      flex-flow: column nowrap;
      border-radius: 12px;

      /* override the default WP styles */
      .wp-block-image {
        margin: 0;
      }

      /* override the default WP styles */
      .wp-block-group__inner-container {
        vertical-align: bottom;
      }

      img,
      iframe,
      video {
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
      }
    `;

    return node;
  }
};

export default imageFrame;
