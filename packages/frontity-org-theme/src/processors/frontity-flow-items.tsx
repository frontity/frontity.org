import { Processor } from "@frontity/html2react/types";
import { css } from "frontity";
import React from "react";

import FrontityOrg from "../../types";

export const flowItems: Processor<React.HTMLProps<HTMLElement>, FrontityOrg> = {
  name: "flow-items",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("frontity-flow-all-items"),
  processor: ({ node }) => {
    if (node.type !== "element") return node;

    node.props.css = css`
      ${node.props.css};

      & > .wp-block-group__inner-container {
        @media screen and (max-width: 700px) {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 100%;
          grid-gap: 0.5rem;

          overflow-x: scroll;
          scroll-snap-type: x mandatory;
          scroll-padding: 0.5rem;
          -webkit-overflow-scrolling: touch;

          padding: 0.5rem;
        }
      }
    `;

    return node;
  },
};
