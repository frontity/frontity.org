import { connect } from "frontity";
import { Connect } from "frontity/types";
import React, { createElement, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useMedia } from "use-media";

import FrontityOrg from "../../types";
import { FLOW_SECTION_BREAKPOINT } from "../processors/frontity-flow-items";

const FlowItem: React.FC<Connect<
  FrontityOrg,
  { tag: string; tabNumber: number; roots: any; fills: any }
>> = ({
  tag,
  children,
  tabNumber,
  actions,
  // destructuring all the props below so that we don't pass them to the DOM
  state,
  libraries,
  roots,
  fills,
  ...props
}) => {
  const isMobile = useMedia({ maxWidth: FLOW_SECTION_BREAKPOINT });

  const [ref, inView] = useInView({ threshold: 0.8 });

  useEffect(() => {
    if (inView && isMobile) {
      actions.theme.setFlowSectionActiveTab({ tabNumber });
    }
  }, [inView, isMobile]);

  const El = createElement(tag, { ...props, ref }, children);

  return El;
};

export default connect(FlowItem);
