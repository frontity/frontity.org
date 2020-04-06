import { connect, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../../types";
import Logo from "../logo";

const SubmitButton: React.FC<Connect<FrontityOrg>> = ({ state }) => {
  // Styled Components
  const StyledButton = styled.button`
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

  return (
    <>
      <StyledButton type="submit">
        <Logo fill={state.theme.colors.white} opacity={1} />
      </StyledButton>
    </>
  );
};

export default connect(SubmitButton);
