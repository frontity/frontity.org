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
`;

const Dots: React.SFC<{ primary: string; grass: string; plain }> = ({
  primary,
  grass,
  plain,
}) => (
  <div
    css={css`
      /* This aligns the dots with  */
      &:nth-child(2n) {
        margin-left: -85px;
        margin-right: -100px;
      }

      &:nth-child(4n) {
        margin-left: -100px;
        margin-right: -85px;
      }

      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      margin-left: -100px;
      margin-right: -100px;
      margin-bottom: 78px;
      z-index: -1;
    `}
  >
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
        <Dot color={addAlpha(primary, 0.12)}></Dot>
        <Dot color={addAlpha(primary, 0.12)}></Dot>
      </>
    )}
  </div>
);

export default Dots;
