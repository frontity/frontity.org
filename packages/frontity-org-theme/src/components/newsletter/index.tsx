import { connect } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../../types";
import AfterNewsletter from "./components/afternewsletter";
import Newsletter from "./components/newsletter";
import Thanks from "./components/thanks";

const NewsletterForm: React.FC<Connect<FrontityOrg>> = ({ state }) => {
  return (
    <>
      {!state.theme.newsletter.sent.newsletterForm && <Newsletter />}
      {state.theme.newsletter.sent.newsletterForm &&
        !state.theme.newsletter.sent.afterNewsletter && <AfterNewsletter />}
      {state.theme.newsletter.sent.newsletterForm &&
        state.theme.newsletter.sent.afterNewsletter && <Thanks />}
    </>
  );
};

export default connect(NewsletterForm);
