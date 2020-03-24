import { connect } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";

const Flow: React.FC<Connect<FrontityOrg>> = ({ state, libraries }) => {
  return <div>frontity flow </div>;
};

export default connect(Flow);
