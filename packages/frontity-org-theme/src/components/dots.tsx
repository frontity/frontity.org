import { css, styled } from "frontity";
import React from "react";

import { addAlpha } from "../utils";

const Dot = styled.div<{ color: string; bigger?: boolean }>`
  height: 8px;
  width: 8px;

  ${({ bigger }) =>
    bigger &&
    css`
      height: 14px;
      width: 14px;
    `}

  border-radius: 50%;
  margin: 6px;
  background: ${({ color }) => color};

  /* Hide the first 2 dots and 8th through 12 dots on small screens */
  :nth-child(-n + 2),
  :nth-child(n + 7):nth-child(-n + 12) {
    @media screen and (max-width: 700px) {
      display: none;
    }
  }
`;

const StyledDots = styled.div<{ column?: boolean }>`
  &:nth-child(2n) {
    margin-left: -85px;
    margin-right: -100px;
  }

  &:nth-child(4n) {
    margin-left: -100px;
    margin-right: -85px;
  }

  display: flex;

  /* By default it's a row, on small screens it's a column */
  flex-flow: row nowrap;

  align-items: center;
  margin-left: -100px;
  margin-right: -100px;
  margin-bottom: 78px;
  z-index: -1;

  /* Adjust the margins and padding for the line with the green dot */
  @media screen and (max-width: 700px) {
    &:nth-child(2n) {
      margin: 0;
      margin-top: -35px;
      padding-right: 70%;
      margin-bottom: -6px;
    }

    flex-flow: column nowrap;
  }
`;

const Dots: React.SFC<{ primary: string; grass: string; plain }> = ({
  primary,
  grass,
  plain,
}) => {
  return (
    <StyledDots>
      {plain ? (
        Array.from({ length: 12 }).map((e, i) => (
          <Dot key={i} color={addAlpha(primary, 0.12)}></Dot>
        ))
      ) : (
        <>
          <Dot color={addAlpha(primary, 0.12)}></Dot>
          <Dot color={addAlpha(primary, 0.12)}></Dot>
          <Dot color={addAlpha(grass, 0.2)}></Dot>
          <Dot color={addAlpha(grass, 0.4)}></Dot>
          <Dot color={addAlpha(grass, 0.6)}></Dot>
          <Dot color={grass} bigger></Dot>
          <Dot color={addAlpha(primary, 0.12)}></Dot>
          <Dot color={addAlpha(primary, 0.12)}></Dot>
          <Dot color={addAlpha(primary, 0.12)}></Dot>
          <Dot color={addAlpha(primary, 0.12)}></Dot>
          <Dot color={addAlpha(primary, 0.12)}></Dot>
          <Dot color={addAlpha(primary, 0.12)}></Dot>
        </>
      )}
    </StyledDots>
  );
};

export default Dots;
