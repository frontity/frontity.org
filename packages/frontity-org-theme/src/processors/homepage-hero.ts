import { Element } from "@frontity/html2react/himalaya/types";
import { Processor } from "@frontity/html2react/types";
import { HTMLProps } from "react";

import HomepageHero from "../components/homepage-hero";

export const homepageHeroAnimation: Processor<HTMLProps<Element>> = {
  name: "homepage-hero-animation",
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className.split(" ").includes("homepage-hero-animation"),
  processor: ({ node }) => {
    if (node.type === "element") {
      node.component = HomepageHero;
    }

    return node;
  },
};
