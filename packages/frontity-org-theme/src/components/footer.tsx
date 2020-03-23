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
      margin-bottom: 20px;
    }
  `;

  return (
    <StyledDiv>
      {/* <Logo
        fill={state.theme.colors.primary}
        opacity={1}
        width={40}
        height={40}
      />
      <span
        css={css`
          margin-left: 20px;
          font-weight: 700;
          font-size: 
        `}
      >
        Frontity
      </span> */}
      <Html2React html={footer.content.rendered} />
    </StyledDiv>
  );
};

export default connect(Footer);
