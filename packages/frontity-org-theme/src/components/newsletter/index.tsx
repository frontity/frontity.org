import { connect, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../../types";
import AfterNewsletter from "./afternewsletter";
import Description from "./description";
import Newsletter from "./newsletter";
import Thanks from "./thanks";

interface Props {
  title: string;
  description: string;
  thanksMessage: string;
}

const NewsletterForm: React.FC<Connect<FrontityOrg, Props>> = ({
  state,
  title,
  description,
  thanksMessage,
}) => {
  return (
    <Container>
      <Description title={title} description={description} />
      <FormContainer>
        {!state.theme.newsletter.sent.newsletterForm && <Newsletter />}
        {state.theme.newsletter.sent.newsletterForm &&
          !state.theme.newsletter.sent.afterNewsletter && <AfterNewsletter />}
        {state.theme.newsletter.sent.newsletterForm &&
          state.theme.newsletter.sent.afterNewsletter && (
            <Thanks thanksMessage={thanksMessage} />
          )}
      </FormContainer>
    </Container>
  );
};

export default connect(NewsletterForm);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  flex-grow: 1;
  @media (min-width: 769px) {
    flex-wrap: nowrap;
    flex-basis: 0;
    flex-grow: 1;
  }
  margin: 50px auto;
  -webkit-transition: -webkit-transform 0.5s linear;
`;
const FormContainer = styled.div`
  width: 100%;
`;
