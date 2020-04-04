import { Processor } from "@frontity/html2react/types";
import { css } from "frontity";
import React from "react";

import FrontityOrg from "../../../types";

export const needInspirationSection: Processor<
  React.HTMLProps<HTMLElement>,
  FrontityOrg
> = {
  name: "need-inspiration-section",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("need-inspiration-section"),
  processor: ({ node }) => {
    if (node.type !== "element") {
      return node;
    }

    //Style the section
    node.props.css = css`
      ${node.props.css};
      > div {
        padding: 100px 0px 0px;
      }
      .wp-block-buttons {
        margin-top: 20px;
      }
      .wp-block-button {
        margin: 0px;
      }
      clip-path: polygon(
        0 0,
        100% 48px,
        100% calc(100% - 50px),
        0 calc(100% - 94px)
      );
    `;

    return node;
  },
};
