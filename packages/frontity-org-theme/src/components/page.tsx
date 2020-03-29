import { connect } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";
import BackgroundWithTriangles from "./background-with-triangles";

const Page: React.FC<Connect<FrontityOrg>> = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const Html2React = libraries.html2react.Component;
  const page = state.source.page[data.id];

  //variables for background triangles
  const triangleTopOpacity = page.acf.background_triangles.top_triangle_opacity;
  const trianglePosition = page.acf.background_triangles.position;
  const triangleTop = page.acf.background_triangles.top;
  return (
    <>
      <Html2React html={page.content.rendered} />
      {(trianglePosition === "both-sides" || trianglePosition === "left") && (
        <BackgroundWithTriangles
          topTriangleOpacity={triangleTopOpacity}
          position="left"
          top={triangleTop}
        />
      )}
      {(trianglePosition === "both-sides" || trianglePosition === "right") && (
        <BackgroundWithTriangles
          topTriangleOpacity={triangleTopOpacity}
          position="right"
          top={triangleTop}
        />
      )}
    </>
  );
};

export default connect(Page);
