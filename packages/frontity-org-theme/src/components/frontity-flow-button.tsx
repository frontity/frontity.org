import { connect } from "frontity";
import { Connect } from "frontity/types";
import React, { createElement } from "react";

import FrontityOrg from "../../types";

const FlowButton: React.FC<Connect<
  FrontityOrg,
  { tag: string; tabNumber: number }
>> = ({
  tag,
  children,
  tabNumber,
  actions,
  // destructuring all the props below so that we don't pass it to the DOM
  state,
  libraries,
  roots,
  fills,
  ...props
}) => {
  const El = createElement(
    tag,
    { ...props, onClick: () => actions.theme.setTabNumber({ tabNumber }) },
    children
  );

  return El;
};

export default connect(FlowButton);
