import { connect, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../../../types";
import { addAlpha } from "../../../utils";
import SubmitButton from "./button";

const Newsletter: React.FC<Connect<FrontityOrg>> = ({ state, actions }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    actions.theme.sendNewsletter();
  };

  return (
    <>
      <Form id="newsletter" onSubmit={onSubmit}>
        <Box>
          <Input>Enter your email</Input>
          <SubmitButton />
        </Box>
      </Form>
    </>
  );
};

export default connect(Newsletter);

const Form = styled.form`
  margin-left: auto;
  width: 400px;
`;
const Box = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border: solid 1px gray;
  border-radius: 8px;
`;
const Input = styled.p`
  width: 100%;
  margin: auto;
  padding-left: 16px;
`;
