import { Element,Node, Processor } from "@frontity/html2react/types";
import { css } from "frontity";

import FrontityOrg from "../../types";
import Dots from "../components/dots";

type DotsBeep = Element & {
  props: {
    primary: string;
    grass: string;
  };
};

type PlainDots = Element & {
  props: {
    plain: boolean;
    primary: string;
  };
};

export const headlessFlow: Processor<Element, FrontityOrg> = {
  name: "headlessFlow",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("headless-flow"),
  processor: ({ node, state }) => {
    node.props.css = css`
      flex-wrap: nowrap;

      /* This is to override a default gutenberg style for desktop columns */
      .wp-block-column {
        margin-left: 0px;
      }

      /* Make a single column on small screens */
      @media screen and (max-width: 700px) {
        flex-direction: column;
      }

      /* Override the default column layout inside the container */
      @media screen and (max-width: 700px) {
        .wp-block-group__inner-container {
          display: grid;
          grid-template-columns: 1fr 70%;
          grid-template-rows: 1fr;
          align-items: start;
          justify-content: left;

          p {
            padding-bottom: 27px;
            padding-left: 15px;
            padding-top: 12px;
            text-align: left;
          }
        }
      }
    `;

    const dotsWithBeep: DotsBeep = {
      type: "element",
      component: Dots,
      props: {
        primary: state.theme.colors.primary,
        grass: state.theme.colors.grass,
      },
    };

    const plainDots: PlainDots = {
      type: "element",
      component: Dots,
      props: { plain: true, primary: state.theme.colors.primary },
    };

    node.children = [
      node.children[0],
      dotsWithBeep,
      node.children[1],
      plainDots,
      node.children[2],
    ];

    return node;
  },
};
