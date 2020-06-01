import Script from "@frontity/components/script";
import useInView from "@frontity/hooks/use-in-view";
import { Connect, Package } from "frontity/types";
import React from "react";

type TweetType = React.FC<Connect<Package, any>>;

const Tweet: TweetType = ({ children, ...props }) => {
  const { ref, inView } = useInView({
    rootMargin: "600px",
    triggerOnce: true,
  });

  return (
    <>
      <blockquote ref={ref} {...props}>
        {children}
      </blockquote>
      {inView && <Script src="https://platform.twitter.com/widgets.js" />}
    </>
  );
};

export default Tweet;
