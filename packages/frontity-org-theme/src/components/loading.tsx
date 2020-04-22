import { styled } from "frontity";
import React from "react";

import Logo from "./icons/logo";

const Loading = () => (
  <Container>
    <Loader />
    <Logo color="#CBCEDC" />
  </Container>
);

const Container = styled.div`
  position: relative;
  width: 60px;
  height: 60px;

  svg {
    position: absolute;
    top: 56%;
    left: 61%;
    transform: translate(-50%, -50%);
  }
`;

const Loader = styled.div`
  border: 2px solid #eaeaf1;
  border-top: 2px solid #8acb88;
  border-right: 2px solid #8acb88;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
