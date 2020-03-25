import { connect, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";
import { addAlpha } from "../utils";

const Footer: React.FC<Connect<FrontityOrg>> = ({ state, libraries }) => {
  const data = state.source.get("/wp_template_part/footer/");
  const footer = state.source["wp_template_part"][data.id];
  const Html2React = libraries.html2react.Component;

  const StyledDiv = styled.div`
    a {
      color: ${addAlpha(state.theme.colors.primary, 0.4)};
    }

    h5 {
      color: ${state.theme.colors.primary};
      margin-top: 0;
      margin-bottom: 15px;
    }

    .wp-block-columns {
      @media screen and (max-width: 860px) {
        display: grid;
        grid-template-rows: 70px repeat(3, 1fr);
        grid-template-columns: 1fr 1fr;

        .wp-block-column:first-of-type {
          grid-column-start: 1;
          grid-column-end: 3;
        }
      }

      @media screen and (min-width: 861px) {
        display: grid;
        grid-template-columns: auto repeat(5, 15%);
      }
    }

    .wp-block-column {
      margin-bottom: 35px;
    }
  `;

  return (
    <StyledDiv>
      <Html2React html={footer.content.rendered} />
    </StyledDiv>
  );
};

export default connect(Footer);
