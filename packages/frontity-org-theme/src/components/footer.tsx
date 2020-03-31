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
      &:hover {
        color: ${state.theme.colors.frontity};
      }
    }

    h5 {
      color: ${state.theme.colors.primary};
      letter-spacing: 1.5px;
      line-height: 21px;
      margin-top: 0;
      margin-bottom: 9px;
    }

    & .wp-block-group {
      max-width: 1080px;
    }

    & .footer-links.wp-block-columns {
      padding-top: 80px;
      padding-bottom: 80px;
      margin-bottom: 0;
    }

    .footer-links.wp-block-columns {
      display: grid;
      grid-template-columns: 1fr repeat(5, auto);

      .wp-block-column {
        line-height: 24px;
        margin-bottom: 35px;
        margin-left: 36px; /* Need this to overwrite the default gutenberg CSS margin*/
      }
    }

    /* Small screens - 2 columns */
    @media screen and (max-width: 800px) {
      .footer-links.wp-block-columns {
        display: grid;
        grid-template-rows: 70px repeat(3, auto);
        grid-template-columns: 1fr 1fr;

        /* Keep the 2nd empty */
        .wp-block-column:first-of-type {
          grid-column-start: 1;
          grid-column-end: 3;
        }
      }
    }

    .footer-bottom-text.wp-block-columns {
      display: grid;
      grid-template-columns: 170px 1fr auto auto;

      margin-top: 20px;

      @media screen and (max-width: 700px) {
        grid-template-columns: 1fr 1fr;
      }

      .wp-block-column {
        margin-bottom: 15px;
        margin-left: 36px; /* Need this to overwrite the default gutenberg CSS margin*/
      }
    }
  `;

  return (
    <StyledDiv>
      <Html2React html={footer.content.rendered} />
    </StyledDiv>
  );
};

export default connect(Footer);
