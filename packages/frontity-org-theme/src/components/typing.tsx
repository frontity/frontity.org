import { connect, styled } from "frontity";
import { Connect } from "frontity/types";
import React, { ReactElement } from "react";
import Typist from "../react-typist/src/Typist";

import FrontityOrg from "../../types";

const Typing: React.FC<
  Connect<
    FrontityOrg,
    {
      children: ReactElement[];
    }
  >
> = ({ children, actions }) => {
  return (
    <Container>
      <Typist
        avgTypingDelay={100}
        onTypingDone={() => {
          actions.theme.loadHeroBlog();
        }}
      >
        {children.map((command, index: number) => (
          <Command key={index}>{command.props.children}</Command>
        ))}
      </Typist>
    </Container>
  );
};

const Container = styled.div``;

const Command = styled.div`
  margin-left: 1.6em;

  &::before {
    content: "$";
    margin-right: 0.7em;
    display: inline-block;
    color: #ffffff94;
  }
`;

export default connect(Typing);
