import React from "react";
import { styled, connect } from "frontity";
import { Connect } from "frontity/types";
import FrontityOrg from "../../types";

const bgt = {
  position: "left",
  top: "",
  topTriangleOpacity: ""
}; // pressumed object

const BackgroundWithTriangles: React.FC<Connect<FrontityOrg>> = ({
  state,
  children
}) => {
  const { position, top, topTriangleOpacity } = bgt;

  return (
    <Container>
      <Triangle>
        <Triangle className="inner" />
      </Triangle>

      {children}
    </Container>
  );
};

const Container = styled.div`
  background: rgba(193, 197, 222, 0.2);
  position: fixed;
  height: 1000px;
  width: 100vw;
  left: 0;
  top: 0;
  /* position: relative; */
`;

const Triangle = styled.div`
  transform: translate(-58%, -52.5%) rotate(45deg);
  box-shadow: 0 0 14px 0 rgba(12, 17, 43, 0.03);
  transform-origin: left;
  background: #fcfcfd;
  position: absolute;
  height: 800px;
  z-index: -2;
  width: 800px;

  .inner {
    box-shadow: 0 0 14px 0 rgba(12, 17, 43, 0.03);
    transform: translate(-50%, -50%);
    height: calc(100% - 170px);
    width: calc(100% - 170px);
    position: relative;
    background: gray;
    opacity: 0.15;
    z-index: -3;
    left: 50%;
    top: 50%;
  }
`;

export default connect(BackgroundWithTriangles);
