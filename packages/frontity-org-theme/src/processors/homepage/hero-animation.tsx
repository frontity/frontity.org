import { Processor } from "@frontity/html2react/types";
import React from "react";

import FrontityOrg from "../../../types";
import HeroAnimation from "../../components/hero-animation";

export const homepageHeroAnimation: Processor<
  React.HTMLProps<HTMLElement>,
  FrontityOrg
> = {
  name: "homepage-hero-animation",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("homepage-hero-animation"),
  processor: ({ node }) => {
    if (node.type !== "element") {
      return node;
    }
    node.component = HeroAnimation;

    return node;
  },
};
