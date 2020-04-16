import { connect, css,styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";

const HeroAnimation: React.FC<Connect<FrontityOrg>> = ({
  children,
  state: {
    theme: { heroTerminalPosition },
  },
}) => (
  <Container
    css={css`
      .terminal {
        ${heroTerminalPosition === "top"
          ? css`
              clip-path: none;
              bottom: 0;
            `
          : css`
              bottom: -5em !important;
            `};
      }
    `}
  >
    {children}
  </Container>
);

const Container = styled.div`
  height: 100%;

  & > div {
    position: relative;
    height: 100%;

    .wp-block-image {
      margin: 0;
    }

    .terminal {
      position: absolute;
      z-index: 3;
      bottom: 0;
      left: -6em;
      clip-path: polygon(0 0, 100% 0%, 100% 92%, 0% 100%);
    }

    figure {
      clip-path: polygon(0 0, 100% 0%, 100% 92%, 0% 100%);
    }
  }
`;

export default connect(HeroAnimation);
