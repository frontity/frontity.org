import { connect, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";

const HeroAnimation: React.FC<Connect<FrontityOrg>> = () => (
  <Container>
    <h1>HERO</h1>
  </Container>
);

const Container = styled.div``;

export default connect(HeroAnimation);
