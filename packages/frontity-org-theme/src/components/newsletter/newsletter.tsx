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
              box-shadow: 0 1px 4px 0 rgba(12, 17, 43, 0.01);
            }
            & > input::placeholder {
              color: ${addAlpha(state.theme.colors.primary, 0.2)};
            }
          `}
        >
          <label htmlFor="newsletterEmail" aria-label="Email adress"></label>
          <Input
            placeholder="Enter your email"
            type="email"
            required
            id="newsletterEmail"
            primary={state.theme.colors.primary}
            onChange={(e) => {
              actions.theme.setNewsletterPropString({
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
                actions.theme.setNewsletterPropBoolean({
                  name: "hasAgreed",
                  value: e.target.checked,
                });
              }}
            />
            <span>
              I agree to the <a href="/legal">Terms of Service</a> and have read
              the <a href="/privacy-policy">Privacy Policy</a>.
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
  max-width: 450px;
`;
const Box = styled.div`
  width: 100%;
  height: 50px;
  padding: 3px;
  display: flex;
  border: 1px solid rgba(12, 17, 43, 0.08);
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 rgba(12, 17, 43, 0.12);
`;

const Input = styled.input<{ primary: string }>`
  width: 100%;
  padding-left: 16px;
  padding-right: 6px;
  border: none;
  background: transparent;
  font-size: 16px;
  line-height: 24px;
  color: ${({ primary }) => addAlpha(primary, 0.8)};
  &:focus {
    outline: none;
  }
`;

const Checkbox = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin-top: 12px;

  & > label > input {
    margin-left: 4px;
  }

  & > label > span {
    margin-left: 8px;
  }
`;
