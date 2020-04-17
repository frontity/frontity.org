import { connect, css, styled } from "frontity";
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
              transform: translateY(0);
            `
          : css`
              transform: translateY(100px);
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
      transition: all 1s ease;
    }
  }
`;

export default connect(HeroAnimation);
