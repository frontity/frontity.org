import { connect, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";

interface Props {
  top: number;
  topTriangleOpacity: number;
  position: string;
}
const BackgroundTriangleComponent: React.FC<Connect<FrontityOrg, Props>> = ({
  top,
  topTriangleOpacity,
  position,
}) => {
  return (
    <TrianglesContainer top={top} position={position}>
      <Triangle1 position={position} />
      <Triangle2 position={position} opacity={topTriangleOpacity} />
    </TrianglesContainer>
  );
};

const TrianglesContainer = styled.div<{ top: number; position: string }>`
  position: absolute;
  top: calc(0px + ${({ top }) => (top ? top : 0)}px);
  display: block;
  width: 0px;
  align-items: center;
  ${({ position }) => position}: 0px;
`;
const Triangle1 = styled.div<{ position: string }>`
  position: absolute;
  width: 818px;
  height: 818px;
  z-index: 1000;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 100%
  );
  ${({ position }) => position}: 0px;
  ${({ position }) =>
    position === "left" && "transform: translate(-660px,-200px) rotate(45deg);"}
  ${({ position }) =>
    position === "right" && "transform: translate(660px,-200px) rotate(45deg);"}
`;
const Triangle2 = styled.div<{ position: string; opacity: number }>`
  position: absolute;
  width: 818px;
  height: 818px;
  z-index: 2000;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, ${({ opacity }) => opacity}) 100%
  );
  box-shadow: 0 0 14px 0 rgba(12, 17, 43, 0.03);
  ${({ position }) => position}: 0px;
  ${({ position }) =>
    position === "left" &&
    "transform: translate(-660px,-200px) rotate(45deg) scale(0.8);"}
  ${({ position }) =>
    position === "right" &&
    "transform: translate(660px,-200px) rotate(45deg) scale(0.8);"}
`;

export default connect(BackgroundTriangleComponent);
