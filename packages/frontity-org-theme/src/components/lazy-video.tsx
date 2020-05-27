import useInView from "@frontity/hooks/use-in-view";
import { Connect, Package } from "frontity/types";
import React from "react";

type VideoType = React.FC<Connect<Package, any>>;

const LazyVideo: VideoType = ({ children, ...props }) => {
  const { ref, inView } = useInView({
    rootMargin: "600px",
    triggerOnce: true,
  });

  return (
    <>
      <video ref={ref} {...(inView && props)}>
        {children}
      </video>
    </>
  );
};

export default LazyVideo;
