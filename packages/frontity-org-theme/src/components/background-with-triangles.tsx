import { connect, css, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";

const TriangleComp: React.FC<{
  top?: string;
  position: string;
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
  { height?: string }
>> = ({ state, height }) => {
  const data = state.source.get(state.router.link);
  const page = state.source.page[data.id];

  const { position, top, top_triangle_opacity: topTriangleOpacity } = page?.acf[
    "background_triangles"
  ];

  return (
    <Container height={height}>
      {position !== "both-sides" && position !== "none" ? (
        <TriangleComp
          topTriangleOpacity={topTriangleOpacity}
          position={position}
          top={top}
        />
      ) : null}

      {position !== "both-sides" &&
        ["left", "right"].map((pos) => (
          <TriangleComp
            topTriangleOpacity={topTriangleOpacity}
            position={pos}
            top={top}
            key={pos}
          />
        ))}
    </Container>
  );
};

const Container = styled.div<{ height?: string }>`
  background: rgba(193, 197, 222, 0.2);
  width: 100vw;
  z-index: -3;
  overflow: hidden;
  position: absolute;

  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
`;

const Triangle = styled.div<{
  top?: string;
  topTriangleOpacity?: string;
}>`
  box-shadow: 0 0 14px 0 rgba(12, 17, 43, 0.03);
  background: #fcfcfd;
  position: absolute;
  height: 750px;
  z-index: -2;
  width: 750px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 100%
  );

  ${(props) => css`
    &.position-left {
      transform: translate(-400px, ${props.top ? `${props.top}px` : "-52.5%"})
        rotate(45deg);
      transform-origin: left;
    }

    &.position-right {
      transform: translate(400px, ${props.top ? `${props.top}px` : "-52.5%"})
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
    z-index: -3;
    left: 50%;
    top: 50%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, ${({ topTriangleOpacity }) => topTriangleOpacity})
        100%
    );
  }
`;

export default connect(BackgroundWithTriangles);
