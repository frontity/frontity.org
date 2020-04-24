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
              @media only screen and (min-width: 768px) {
                transform: translateY(120px);
              }
              @media only screen and (max-width: 768px) {
                transform: translateY(220px);
              }
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
    clip-path: polygon(0 0, 300% 0, 120% 90%, 0% 100%);
    position: relative;
    height: 100%;

    @media only screen and (max-width: 769px) {
      clip-path: none;
    }

    .wp-block-image {
      margin: 0;
    }

    .terminal {
      position: absolute;
      z-index: 3;
      bottom: 0;
      left: 0;
      transition: all 1s ease;

      .change-position {
        visibility: visible;
      }
    }
  }
`;

export default connect(HeroAnimation);
