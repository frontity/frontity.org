import { connect, css,styled } from "frontity";
import { Connect } from "frontity/types";
import React, { ReactChild } from "react";

import FrontityOrg from "../../types";

const TriangleComp: React.FC<{
  top?: string;
  position?: string;
  topTriangleOpacity?: string;
}> = ({ position, top, topTriangleOpacity }) => (
  <Triangle
    className={`position-${position}`}
    top={top}
    topTriangleOpacity={topTriangleOpacity}
  >
    <Triangle className="inner" />
  </Triangle>
);

const BackgroundWithTriangles: React.FC<Connect<
  FrontityOrg,
  {
    children: ReactChild;
  }
>> = ({ state, children }) => {
  const data = state.source.get(state.router.link);
  const page = state.source.page[data.id];

  const { position, top, top_triangle_opacity: topTriangleOpacity } = page?.acf[
    "background_triangles"
  ];

  return (
    <Container>
      {position === "none" && null}

      {position === "both-sides" && (
        <TriangleComp
          topTriangleOpacity={topTriangleOpacity}
          position={position}
          top={top}
        />
      )}

      {position !== "both-sides" &&
        ["left", "right"].map((pos) => (
          <TriangleComp
            topTriangleOpacity={topTriangleOpacity}
            position={pos}
            top={top}
            key={pos}
          />
        ))}

      {children}
    </Container>
  );
};

const Container = styled.div`
  background: rgba(193, 197, 222, 0.2);
  width: 100vw;
  z-index: -3;
  height: 1000px;
  overflow: hidden;
`;

const Triangle = styled.div<{
  className?: string;
  top?: string;
  topTriangleOpacity?: string;
}>`
  box-shadow: 0 0 14px 0 rgba(12, 17, 43, 0.03);
  background: #fcfcfd;
  position: absolute;
  height: 750px;
  z-index: -2;
  width: 750px;

  ${(props) => css`
    &.position-left {
      transform: translate(-58%, ${props.top ? `${props.top}px` : "-52.5%"})
        rotate(45deg);
      transform-origin: left;
    }

    &.position-right {
      transform: translate(58%, ${props.top ? `${props.top}px` : "-52.5%"})
        rotate(-45deg);
      transform-origin: right;
      right: 0;
    }
  `}

  .inner {
    box-shadow: 0 0 14px 0 rgba(12, 17, 43, 0.03);
    transform: translate(-50%, -50%);
    height: calc(100% - 170px);
    width: calc(100% - 170px);
    background: gray;
    opacity: 0.15;
    z-index: -3;
    left: 50%;
    top: 50%;
  }
`;

export default connect(BackgroundWithTriangles);
