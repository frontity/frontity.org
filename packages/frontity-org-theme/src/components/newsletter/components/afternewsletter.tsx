import { connect, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../../../types";
import { addAlpha } from "../../../utils";
import SubmitButton from "./button";
import Question from "./question";

const AfterNewsletter: React.FC<Connect<FrontityOrg>> = ({
  state,
  actions,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    actions.theme.sendAfterNewsletter();
  };

  //Styled Components
  const Form = styled.form`
    width: 500px;
    margin-left: auto;
    padding: 0px 40px;
    background: ${state.theme.colors.white};
    border-radius: 8px;
    box-shadow: 0 4px 14px 0 rgba(31, 56, 197, 0.09),
      0 2px 4px 0 rgba(31, 56, 197, 0.12);
  `;
  const TitleContainer = styled.div`
    margin-bottom: 24px;
  `;
  const Heading = styled.h4`
    margin: 0px;
    padding: 20px 0px 12px;
  `;
  const Paragraph = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: ${addAlpha(state.theme.colors.primary, 0.8)};
  `;
  return (
    <>
      <Form id="after-newsletter" onSubmit={onSubmit}>
        <TitleContainer>
          <Heading>Thanks for your interest in Frontity!</Heading>
          <Paragraph>Could you tell us a bit more about yourself?</Paragraph>
        </TitleContainer>
        {Object.keys(state.theme.newsletter.afterNewsletter.questions).map(
          (name) => (
            <Question key={name} name={name} />
          )
        )}

        <SubmitButton />
      </Form>
    </>
  );
};

export default connect(AfterNewsletter);
