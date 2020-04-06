import { connect } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../../types";

const Thanks: React.FC<Connect<FrontityOrg, { thanksMessage: string }>> = ({
  state,
  thanksMessage,
}) => {
  return (
    <>
      <div>{thanksMessage}</div>
    </>
  );
};

export default connect(Thanks);
