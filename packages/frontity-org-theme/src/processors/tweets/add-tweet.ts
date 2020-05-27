import { Element,Processor } from "@frontity/html2react/types";

import Tweet from "../../components/tweet";

export const addTweet: Processor<Element> = {
  test: ({ node }) =>
    node.type === "element" &&
    node.component === "blockquote" &&
    (node.props.className.split(" ").includes("twitter-tweet") ||
      node.props.className.split(" ").includes("twitter-video")),
  priority: 10,
  name: "addTweet",
  processor: ({ node }) => {
    node.component = Tweet;
    return node;
  },
};
