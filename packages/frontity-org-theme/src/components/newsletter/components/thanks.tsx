import { connect } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../../../types";

const Thanks: React.FC<Connect<FrontityOrg>> = ({ state }) => {
  return (
    <>
      <div>This is the thanks message</div>
    </>
  );
};

export default connect(Thanks);
