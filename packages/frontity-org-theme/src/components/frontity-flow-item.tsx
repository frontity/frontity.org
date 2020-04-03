import { connect } from "frontity";
import { Connect } from "frontity/types";
import React, { createElement, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import FrontityOrg from "../../types";

const FlowItem: React.FC<Connect<
  FrontityOrg,
  { tag: string; tabNumber: number }
>> = ({ tag, children, tabNumber, actions, ...props }) => {
  const [ref, inView] = useInView({ threshold: 0.8 });

  useEffect(() => {
    if (inView) {
      actions.theme.setTabNumber({ tabNumber });
    }
  }, [inView]);

  const El = createElement(tag, { ...props, ref }, children);

  return El;
};

export default connect(FlowItem);
