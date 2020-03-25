import React from "react";
import { css, styled } from "frontity";

const Dot = styled.span`
  display: inline-block;
  width: 9px;
  height: 9px;
  margin-left: 5px;
  border-radius: 100%;
  background-color: rgba(15, 28, 100, 0.2);
  vertical-align: baseline;
  margin-top: 12px;
`;

const WindowTopBar = () => (
  <div
    css={css`
      height: 32px;
      padding-left: 10px;
    `}
  >
    <Dot />
    <Dot />
    <Dot />
  </div>
);

export default WindowTopBar;
