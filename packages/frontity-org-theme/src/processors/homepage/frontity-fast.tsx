import { Processor } from "@frontity/html2react/types";
import { css, keyframes } from "frontity";
import React from "react";

import FrontityOrg from "../../../types";
import Logo from "../../components/logo";
import { addAlpha } from "../../utils";

export const fastSection: Processor<
  React.HTMLProps<HTMLElement>,
  FrontityOrg
> = {
  name: "frontity-ssg-section",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("frontity-ssg"),
  processor: ({ node, state }) => {
    if (node.type !== "element") {
      return node;
    }

    //Logo animation
    const move = keyframes`
    0% { 
      transform: scale(5) translateX(0px);
    }
    50% { 
      transform: scale(5) translateX(4px);
    }  
    100% { 
      transform: scale(5) translateX(0px); 
    }
    `;

    //Add Logo svg
    const element: any = {
      type: "element",
      component: Logo,
      props: {
        css: css`
          position: absolute;
          display: block;
          @media only screen and (max-width: 769px) {
            display: none;
          }
          bottom: 550px;
          left: -36px;
          animation: ${move} 1.6s ease-in-out infinite;
        `,
        className: "frontity-logo-demo",
        fill: addAlpha(state.theme.colors.frontity, 0.2),
      },
    };
    node.children.unshift(element);

    //Style the section
    node.props.css = css`
      ${node.props.css};
      position: relative;
      .demo-iframe {
        width: 100%;
        height: 600px;
      }
      .wp-block-group__inner-container,
      iframe {
        width: 100%;
        height: 100%;
      }
    `;

    return node;
  },
};
