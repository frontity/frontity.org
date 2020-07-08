import { Element,Processor } from "@frontity/html2react/types";
import { css } from "frontity";

import FrontityOrg from "../../types";

export const polygonBackground: Processor<Element, FrontityOrg> = {
  name: "polygon-background",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("has-polygon-background"),
  processor: ({ node }) => {
    node.props.css = css`
      ${node.props.css};
      clip-path: polygon(0 0, 100% 32px, 100% 100%, 0 calc(100% - 44px));
    `;

    return node;
  },
};
