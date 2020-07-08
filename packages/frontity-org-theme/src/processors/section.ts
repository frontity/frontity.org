import { Element,Processor } from "@frontity/html2react/types";
import { css } from "frontity";
import React from "react";

import FrontityOrg from "../../types";

export const section: Processor<Element, FrontityOrg> = {
  name: "section",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("default-section"),
  processor: ({ node }) => {
    node.props.css = css`
      ${node.props.css};
      > div {
        padding: 100px 0px;
      }
    `;

    return node;
  },
};
