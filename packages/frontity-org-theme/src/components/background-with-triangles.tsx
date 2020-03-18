import React from "react";
import { styled } from "frontity";

const BackgroundWithTriangles: React.FC<{
  position: "left" | "right" | "both";
}> = ({ children }) => {
  return (
    <Container>
      <Triangle />
      <Triangle className="small" />
      {children}
    </Container>
  );
};

const Container = styled.div`
  height: 1000px;
  border: 1px solid #000;
  position: relative;
  background: #c1c5de;
  opacity: 0.15;
  z-index: -3;
`;

const Triangle = styled.div`
  position: absolute;
  transform: translateY(-20%);
  z-index: -2;
  opacity: 0.4;
  top: 0;
  left: 0;

  width: 0;
  height: 0;

  border: 400px solid transparent;
  border-left: 450px solid #fdfdfe;

  &.small {
    z-index: -1;
    opacity: 1;
    top: 0;
    left: 0;
    transform: translateY(-10%);
    border-width: 300px;
    border-left: 350px solid #c1c5de;
  }
`;

export default BackgroundWithTriangles;
