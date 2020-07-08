import { Element,Processor } from "@frontity/html2react/types";

import HomepageHero from "../components/homepage-hero";

export const homepageHeroAnimation: Processor<Element> = {
  name: "homepage-hero-animation",
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className?.split(" ").includes("homepage-hero-animation"),
  processor: ({ node }) => {
    node.component = HomepageHero;

    return node;
  },
};
