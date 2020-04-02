import { connect } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../../../types";
import SubmitButton from "./button";
import Question from "./question";

const AfterNewsletter: React.FC<Connect<FrontityOrg>> = ({
  state,
  actions,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    actions.sendAfterNewsletter();
  };
  return (
    <>
      <form id="after-newsletter" onSubmit={onSubmit}>
        <h3>Thanks for your interest in Frontity!</h3>
        <p>Could you tell us a bit more about yourself?</p>
        {Object.keys(state.theme.newsletter.afterNewsletter.questions).map(
          (name) => (
            <Question key={name} name={name} />
          )
        )}

        <SubmitButton />
      </form>
    </>
  );
};

export default connect(AfterNewsletter);
