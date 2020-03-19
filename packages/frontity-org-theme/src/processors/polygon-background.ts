import React from "react";
import { css } from "frontity";
import { Processor } from "@frontity/html2react/types";
import FrontityOrg from "../../types";

const polygonBackground: Processor<
  React.HTMLProps<HTMLElement>,
  FrontityOrg
> = {
  name: "polygon-background",
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className &&
    node.props?.className?.split(" ").includes("has-polygon-background"),
  processor: ({ node }) => {
    if (node.type !== "element") {
      return node;
    }

    node.props.css = css`
      ${node.props.css};
      clip-path: polygon(0 0, 100% 32px, 100% 100%, 0 calc(100% - 44px));
    `;

    return node;
  }
};

export default polygonBackground;
