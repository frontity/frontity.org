import React from "react";
import { styled } from "frontity";

const BackgroundWithTriangles: React.FC = ({ children }) => {
  return (
    <Container>
      <Triangle />
      <Triangle className="small" />
      {children}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Triangle = styled.div`
  position: relative;
  transform: translateY(-50%);
  top: 50%;
  left: 0;

  &.small {
  }
`;

export default BackgroundWithTriangles;
