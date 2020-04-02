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
      <Container>
        <div>
          <h4>Join the Frontity newsletter</h4>
          <p>
            Stay up-to-date on new releases and features, tutorials, and
            community news.
          </p>
        </div>
        <form id="newsletter" onSubmit={onSubmit}>
          <p>Enter your email</p>
          <SubmitButton />
        </form>
      </Container>
    </>
  );
};

export default connect(Newsletter);

const Container = styled.div`
  margin: 50px auto;
`;
