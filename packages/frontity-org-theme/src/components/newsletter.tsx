import { connect, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";
import { addAlpha } from "../utils";
import Logo from "./logo";

interface Props {
  className: string;
}

const Newsletter: React.FC<Connect<FrontityOrg, Props>> = ({ state }) => {
  // Styled Components
  const Button = styled.a`
    background-color: ${state.theme.colors.frontity};
    color: ${state.theme.colors.white};
    line-height: 16px;
    font-size: 16px;
    padding: 12px 16px;
    border-radius: 8px;
    &:active {
      transform: translateY(2px);
    }
    box-shadow: 0 4px 8px 0 rgba(12, 17, 43, 0.12),
      0 1px 4px 0 rgba(12, 17, 43, 0.16);
    svg {
      transition: transform 300ms ease-in-out;
    }
    &:hover {
      filter: opacity(0.9);
      cursor: pointer;
      svg {
        transform: translateX(2px);
      }
    }
  `;

  const Container = styled.div`
    margin: 50px auto;
  `;

  return (
    <>
      <Container>
        <div>
          <h4>Join the Frontity newsletter</h4>
          <p>
            Stay up-to-date on new releases and features, tutorials, and
            community news.
          </p>
        </div>
        <form>
          <p>Enter your email</p>
          <Button>
            <Logo fill={state.theme.colors.white} opacity={1} />
          </Button>
        </form>
      </Container>
    </>
  );
};

export default connect(Newsletter);
