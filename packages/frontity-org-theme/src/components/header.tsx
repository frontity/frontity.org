import { connect, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";

const Header: React.FC<Connect<FrontityOrg>> = ({ state, libraries }) => {
  const data = state.source.get("/wp_template_part/header/");
  const header = state.source["wp_template_part"][data.id];
  const Html2React = libraries.html2react.Component;

  return (
    <HeaderStyles>
      <Html2React html={header.content.rendered} />
    </HeaderStyles>
  );
};

export default connect(Header);

const HeaderStyles = styled.div``;
