import { connect, css,styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";

const ScrollButton: React.FC<Connect<FrontityOrg, any>> = ({ state }) => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Button
      css={css`
        background-color: ${state.theme.colors.frontity};
        color: ${state.theme.colors.white};
      `}
      onClick={scrollToTop}
    >
      ↑
    </Button>
  );
};

export default connect(ScrollButton);

const Button = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
  position: fixed;
  bottom: 16px;
  right: 16px;
  height: 56px;
  width: 56px;
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(12, 17, 43, 0.12),
    0 1px 4px 0 rgba(12, 17, 43, 0.16);
  line-height: 56px;
  font-size: 24px;
  font-weight: bold;
`;
