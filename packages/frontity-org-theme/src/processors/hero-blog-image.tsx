import { Processor } from "@frontity/html2react/types";
import { connect, css,styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";
import { ClipLoader } from "react-spinners";

import FrontityOrg from "../../types";

const HeroBlogImageComponent: React.FC<Connect<
  FrontityOrg,
  {
    className?: string;
  }
>> = ({ children, className, state }) => (
  <Container className={className}>
    {children}

    <Loading
      css={css`
        transition: 1s ease-in-out opacity;
        opacity: ${state.theme.heroBlogIsLoading ? 1 : 0};
      `}
    >
      <ClipLoader size={50} color={"blue"} />
    </Loading>
  </Container>
);

const Container = styled.div`
  position: relative;
`;

const Loading = styled.div`
  position: absolute;
  background: #fff;
  height: calc(100% - 30px);
  top: 30px;
  width: 100%;
`;

const ConnectedHeroBlogImageComponent = connect(HeroBlogImageComponent);

export const heroBlogImage: Processor = {
  name: "hero-blog-image",
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className &&
    node.props.className.split(" ").includes("has-browser-window") &&
    node.props.className.split(" ").includes("hero-blog-image"),
  processor: ({ node }) => {
    if (node.type === "element") {
      node.component = ConnectedHeroBlogImageComponent;
    }

    return node;
  },
};
