import { Node, Processor } from "@frontity/html2react/types";
import { connect } from "frontity";
import { Connect } from "frontity/types";
import React, { useState } from "react";

import FrontityOrg from "../../types";

const Switch: React.FC<Connect<
  FrontityOrg,
  {
    html: string;
  }
>> = connect(({ libraries, html }) => {
  const Html2React = libraries.html2react.Component;

  const [state, setState] = useState(true);

  // `match()`
  //
  // 1. Match a part of html tree
  // 2. Remove that part of the HTML from the `html` parameter
  // 3. Then, it will create a "slot" in the "html" that you can "fill"
  // using the returned Component (param 1.) You can think of a "slot" like a placeholder of somthing similar to `children` in react or slots in Vue: https://vuejs.org/v2/guide/components-slots.html
  //
  // Returns 2 params:
  //  1. a React component
  //  2. The HTML under the node that was matched
  const [SwitchButton, buttonHtml] = match("div.switchButton", html);
  const [Content, contentHtml] = match("div.content", html);

  return (
    // 2. We need to extend Html2React to be able to handle the "slots"
    <Html2React html={html}>
      {/* We can pass several children and let Html2React figure out 
          where to put them in the HTML, according to the slots */}
      <SwitchButton onClick={() => setState((state) => !state)}>
        <Html2React html={buttonHtml} />
      </SwitchButton>

      <Content>
        {state ? "on" : "off"}
        <Html2React html={contentHtml} />
      </Content>
    </Html2React>
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
  processor: ({ node, html }) => {
    if (node.type !== "element") return node;

    const element: Node<React.HTMLProps<HTMLElement> & { html: string }> = {
      type: "element",
      component: Switch,
      props: {
        // `html` should be provided as an extra parameter in the
        //  callback from the processor. Would have to modify html2React for this.
        html,
      },
    };

    return element;
  },
};
