import { connect } from "frontity";
import { Connect } from "frontity/types";
import React, { createElement } from "react";

import FrontityOrg from "../../types";

const FlowButton: React.FC<Connect<
  FrontityOrg,
  { tag: string; tabNumber: number }
>> = ({ tag, children, tabNumber, actions, ...props }) => {
  const El = createElement(
    tag,
    { ...props, onClick: () => actions.theme.setTabNumber({ tabNumber }) },
    children
  );

  return El;
};

export default connect(FlowButton);
