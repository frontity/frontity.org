import { connect, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../../types";
import AfterNewsletter from "./components/afternewsletter";
import Description from "./components/description";
import Newsletter from "./components/newsletter";
import Thanks from "./components/thanks";

const NewsletterForm: React.FC<Connect<FrontityOrg>> = ({ state }) => {
  return (
    <Container>
      <Description />
      <FormContainer>
        {!state.theme.newsletter.sent.newsletterForm && <Newsletter />}
        {state.theme.newsletter.sent.newsletterForm &&
          !state.theme.newsletter.sent.afterNewsletter && <AfterNewsletter />}
        {state.theme.newsletter.sent.newsletterForm &&
          state.theme.newsletter.sent.afterNewsletter && <Thanks />}
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
`;
const FormContainer = styled.div`
  width: 100%;
`;
