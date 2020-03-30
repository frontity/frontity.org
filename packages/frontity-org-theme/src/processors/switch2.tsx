import { Node, Processor } from "@frontity/html2react/types";
import { connect, css } from "frontity";
import { Connect } from "frontity/types";
import React, { useState } from "react";

import FrontityOrg from "../../types";

const Switch: React.FC<Connect<FrontityOrg>> = connect(({ node }) => {
  const [state, setState] = useState(true);

  // Let's say that have HTMl like this:
  // <div class="switch">
  //   <div class="switch-button"></div>
  //   <div class="switch-value"></div>
  // </div>
  //
  // We want to manage the state here in <Switch/>
  // and pass it down to a child component. How to do it?

  return (
    <>
      hello
      <node.component state={state}>
        {/* 
            Here we want to pass the state down to the child  
            with the `switch-value` class. How to do it?
        */}
      </node.component>
    </>
  );
});

export const switchElement: Processor<
  React.HTMLProps<HTMLElement>,
  FrontityOrg
> = {
  name: "switch",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("switch"),
  processor: ({ node }) => {
    if (node.type !== "element") return node;

    const element: any = {
      type: "element",
      component: Switch,
      props: { node },
      children: node.children,
    };

    return element;
  },
};
