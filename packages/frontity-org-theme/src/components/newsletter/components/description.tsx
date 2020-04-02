import { connect, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../../../types";
import { addAlpha } from "../../../utils";

const Description: React.FC<Connect<FrontityOrg>> = ({ state, actions }) => {
  const Paragraph = styled.p`
    font-size: 14px;
    line-height: 20px;
    color: ${addAlpha(state.theme.colors.primary, 0.8)};
  `;
  const Heading = styled.h4`
    margin: 0px 0px 8px;
  `;
  const Container = styled.div`
    margin: 0px;
    width: 100%;
  `;
  return (
    <>
      <Container>
        <Heading>Join the Frontity newsletter</Heading>
        <Paragraph>
          Stay up-to-date on new releases and features, tutorials, and community
          news.
        </Paragraph>
      </Container>
    </>
  );
};

export default connect(Description);
