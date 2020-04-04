import { Processor } from "@frontity/html2react/types";
import { css } from "frontity";
import React from "react";

import FrontityOrg from "../../../types";

export const showcasesGallery: Processor<
  React.HTMLProps<HTMLElement>,
  FrontityOrg
> = {
  name: "showcases-gallery",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("showcases-gallery"),
  processor: ({ node }) => {
    if (node.type !== "element") {
      return node;
    }
    //Style the section
    node.props.css = css`
      ${node.props.css};
      display: block;
      position: relative;
      margin-top: 100px;
      height: 300px;
      .wp-block-column {
        margin: 0;
      }
    `;
    node.children.map((item, index) => {
      item["props"].css = css`
        ${item["props"].css};
        display: block;
        position: absolute;
        margin: 0;
        max-width: 475px;
        width: 100%;
        div {
          width: 100%;
        }
        img,
        figure {
          width: 475px;
          overflow: hidden;
        }
        top: 0%;
        left: 50%;
        ${index === 0
          ? "transform: translate(calc(-50% - 300px), calc(0% + 60px));"
          : index === 1
          ? `transform: translate(-50%, 0%);
          z-index: 10;
          `
          : index === 2 &&
            "transform: translate(calc(-50% + 300px), calc(0% + 60px));"}
      `;
    });
    return node;
  },
};
