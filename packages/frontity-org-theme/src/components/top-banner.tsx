import { connect, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";

const TopBanner = connect<React.FC<Connect<FrontityOrg>>>(
  ({ state, libraries }) => {
    // Get the banner template.
    const data = state.source.get("/blog/wp_template_part/top-banner/");
    const banner = state.source["wp_template_part"][data.id];

    // Get the component that transform the template to React.
    const Html2React = libraries.html2react.Component;

    return (
      <Container>
        {/* Render the template */}
        <Html2React html={banner.content.rendered} />
      </Container>
    );
  }
);

export default connect(TopBanner);

const Container = styled.div`
  .wp-block-group.has-background {
    padding: 10px 30px;
  }
`;
