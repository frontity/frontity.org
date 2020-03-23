import { connect } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";

const Page: React.FC<Connect<FrontityOrg>> = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const Html2React = libraries.html2react.Component;
  const page = state.source.page[data.id];
  return <Html2React html={page.content.rendered} />;
};

export default connect(Page);
