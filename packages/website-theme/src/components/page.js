import { connect } from "frontity";
import React from "react";

const Page = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  return <>{<Html2React html={page.content.rendered} />}</>;
};

export default connect(Page);
