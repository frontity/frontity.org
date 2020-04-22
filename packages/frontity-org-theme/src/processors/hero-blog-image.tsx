import { Processor } from "@frontity/html2react/types";
import { connect, css, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";
import Loading from "../components/loading";

const HeroBlogImageComponent: React.FC<Connect<
  FrontityOrg,
  {
    className?: string;
  }
>> = ({ children, className, state }) => (
  <Container className={className}>
    {children}

    <BrowserContainer
      css={css`
        transition: 1s ease-in-out opacity;
        opacity: ${state.theme.heroBlogIsLoading ? 1 : 0};
      `}
    >
      <LoadingContainer>
        <Loader>
          <Loading />
        </Loader>

        <LoadingText>Setting up Frontity...</LoadingText>
      </LoadingContainer>
    </BrowserContainer>
  </Container>
);

const Container = styled.div`
  position: relative;
  @media only screen and (min-width: 768px) {
    transform: translateX(70px);
  }
`;

const BrowserContainer = styled.div`
  position: absolute;
  background: #fff;
  height: calc(100% - 30px);
  top: 30px;
  width: 100%;
`;

const LoadingContainer = styled.div`
  padding: 2.5em 1.5em;
  display: flex;
  align-items: center;
`;

const Loader = styled.div`
  position: relative;
`;

const LoadingText = styled.div`
  margin-left: 0.5em;
  font-size: 1em;
`;

const ConnectedHeroBlogImageComponent = connect(HeroBlogImageComponent);

export const heroBlogImage: Processor = {
  name: "hero-blog-image",
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className &&
    node.props.className?.split(" ").includes("has-browser-window") &&
    node.props.className?.split(" ").includes("hero-blog-image"),
  processor: ({ node }) => {
    if (node.type === "element") {
      node.component = ConnectedHeroBlogImageComponent;
    }

    return node;
  },
};
