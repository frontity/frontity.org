import { connect } from "frontity";
import React from "react";

const Question = ({ name, state }) => {
  const { label, options } = state.theme.newsletter.afterNewsletter.questions[
    name
  ];
  // const answer = state.theme.newsletter.afterNewsletter.answers[name];
  return (
    <>
      <label>{label}</label>
    </>
  );
};

export default connect(Question);
