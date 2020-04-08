import { connect } from "frontity";
import { Connect } from "frontity/types";
import React, { createElement, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import FrontityOrg from "../../types";

const FlowItem: React.FC<Connect<
  FrontityOrg,
  { tag: string; tabNumber: number }
>> = ({
  tag,
  children,
  tabNumber,
  actions,
  // destructuring all the props below so that we don't pass it to the DOM
  state,
  className,
  libraries,
  roots,
  fills,
  ...props
}) => {
  const [ref, inView] = useInView({ threshold: 0.8 });

  useEffect(() => {
    if (inView) {
      actions.theme.setTabNumber({ tabNumber });
    }
  }, [inView]);

  const cls =
    state.theme.tabNumber !== tabNumber
      ? className
      : className.concat(" visible");

  const El = createElement(tag, { ...props, ref, className: cls }, children);

  return El;
};

export default connect(FlowItem);
