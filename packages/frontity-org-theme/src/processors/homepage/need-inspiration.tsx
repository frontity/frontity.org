import { Element,Processor } from "@frontity/html2react/types";
import { css } from "frontity";

import FrontityOrg from "../../../types";

export const needInspirationSection: Processor<Element, FrontityOrg> = {
  name: "need-inspiration-section",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("need-inspiration-section"),
  processor: ({ node }) => {
    //Style the section
    node.props.css = css`
      ${node.props.css};
      overflow: hidden;
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
