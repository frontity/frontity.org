import { Processor, Element } from "@frontity/html2react/types";
import LazyVideo from "../components/lazy-video";

export const lazyVideo: Processor<Element> = {
  name: "lazy-video",
  test: ({ node }) => node.type === "element" && node.component === "video",
  processor: ({ node }) => {
    node.component = LazyVideo;

    return node;
  },
};
