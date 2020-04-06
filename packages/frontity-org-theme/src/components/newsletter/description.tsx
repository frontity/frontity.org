import { connect, css, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../../types";
import { addAlpha } from "../../utils";

interface Props {
  title: string;
  description: string;
}

const Description: React.FC<Connect<FrontityOrg, Props>> = ({
  state,
  title,
  description,
}) => {
  return (
    <>
      <Container>
        <Heading>{title}</Heading>
        <Paragraph
          css={css`
            color: ${addAlpha(state.theme.colors.primary, 0.8)};
          `}
        >
          {description}
        </Paragraph>
      </Container>
    </>
  );
};

export default connect(Description);

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 20px;
`;
const Heading = styled.h4`
  margin: 0px 0px 8px;
`;
const Container = styled.div`
  margin: 0px;
  width: 100%;
`;
