import { connect, css, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../../types";
import { addAlpha } from "../../utils";
import SubmitButton from "./button";

const Newsletter: React.FC<Connect<FrontityOrg>> = ({ state, actions }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    actions.theme.sendNewsletter();
  };

  return (
    <>
      <Form id="newsletter" onSubmit={onSubmit}>
        <Box
          css={css`
            &:focus-within {
              border: 1px solid ${state.theme.colors.frontity};
            }
            & > input::placeholder {
              color: ${addAlpha(state.theme.colors.primary, 0.2)};
            }
          `}
        >
          <Input
            placeholder="Enter your email"
            type="email"
            required
            onChange={(e) => {
              actions.theme.setNewsletterProp({
                name: "email",
                value: e.target.value,
              });
            }}
          />

          <SubmitButton />
        </Box>
        <Checkbox>
          <label>
            <input
              name="hasAgreed"
              type="checkbox"
              required
              checked={state.theme.newsletter.newsletterForm.hasAgreed}
              onChange={(e) => {
                actions.theme.setNewsletterProp({
                  name: "hasAgreed",
                  value: e.target.checked,
                });
              }}
            />
            <span>
              I agree to the <a href="/privacy-policy">Privacy Policy</a>
            </span>
          </label>
        </Checkbox>
      </Form>
    </>
  );
};

export default connect(Newsletter);

const Form = styled.form`
  margin-left: auto;
  @media only screen and (max-width: 769px) {
    margin-left: 0px;
  }
  max-width: 400px;
`;
const Box = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border: solid 1px gray;
  border-radius: 8px;
`;
const Input = styled.input`
  width: 100%;
  padding-left: 16px;
  border: none;
  background: transparent;
  font-size: 16px;
  line-height: 24px;
  &:focus {
    outline: none;
  }
`;

const Checkbox = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin-top: 12px;
`;
