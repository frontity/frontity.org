import { connect } from "frontity";
import { Connect } from "frontity/types";
import React, { createElement } from "react";

import FrontityOrg from "../../types";

const FlowButton: React.FC<Connect<FrontityOrg>> = ({
  tag,
  children,
  tabNumber,
  actions,
  libraries, // destructure in order to not pass them to the DOM node.
  state,
  roots,
  fills,
  ...props
}) => {
  const El = createElement(
    tag,
    { ...props, onClick: () => actions.theme.setTabNumber(tabNumber) },
    children
  );

  return El;
};

export default connect(FlowButton);
