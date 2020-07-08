import { Element,Processor } from "@frontity/html2react/types";
import { css } from "frontity";

import FrontityOrg from "../../types";
import { addAlpha } from "../utils";

export const horizontalSeparator: Processor<Element, FrontityOrg> = {
  name: "horizontalSeparator",
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className &&
    node.props.className.split(" ").includes("wp-block-separator"),
  processor: ({ node, state }) => {
    node.props.css = css`
      border-color: ${addAlpha(state.theme.colors.primary, 0.12)};
      max-width: 1080px;
    `;

    return node;
  },
};
