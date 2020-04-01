import { connect, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";
import { scrollToTop } from "../utils";

const ScrollButton: React.FC<Connect<FrontityOrg, any>> = ({ state }) => {
  const Button = styled.div`
    position: fixed;
    bottom: 16px;
    right: 16px;
    background-color: ${state.theme.colors.frontity};
    height: 56px;
    width: 56px;
    border-radius: 50%;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(12, 17, 43, 0.12),
      0 1px 4px 0 rgba(12, 17, 43, 0.16);
    color: ${state.theme.colors.white};
    line-height: 56px;
    font-size: 24px;
    font-weight: bold;
  `;
  return typeof window !== "undefined" ? (
    <Button onClick={scrollToTop}>
      <p>↑</p>
    </Button>
  ) : null;
};

export default connect(ScrollButton);
