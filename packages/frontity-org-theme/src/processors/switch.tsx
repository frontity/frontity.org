import { Node, Processor } from "@frontity/html2react/types";
import { connect } from "frontity";
import { Connect } from "frontity/types";
import { stringify } from "himalaya";
import React, { useState } from "react";

import FrontityOrg from "../../types";

interface Props {
  rendered: string;
}

const Switch: React.FC<Connect<FrontityOrg, Props>> = connect(
  ({ libraries, rendered }) => {
    const Html2React = libraries.html2react.Component;

    const [value, setValue] = useState("on");

    // Match a part of html tree
    // Will remove that part of the HTML from "rendered"
    // Then, it will create a "slot" in the "rendered" that you can "fill"
    // using the returned Component (param 1.)
    //
    // Returns 2 params:
    //  1. React component
    //  2. The HTML under that node
    const [CreateButton, htmlUnderCreateButton] = match(
      "div.createButton",
      rendered
    );

    const Content = ({ children }) => <section>{children}</section>;

    return (
      <Html2React html={rendered}>
        <CreateButton onClick={() => setValue("on")}>
          <Html2React html={htmlUnderCreateButton} />
        </CreateButton>

        <Content>
          <h4> Some title </h4>
        </Content>
      </Html2React>
    );
  }
);

export const switchElement: Processor<
  React.HTMLProps<HTMLElement>,
  FrontityOrg
> = {
  name: "switch",
  test: ({ node }) =>
    node.type === "element" &&
    node.props?.className?.split(" ").includes("switch"),
  processor: ({ node }) => {
    if (node.type !== "element") {
      return node;
    }

    const element: Node<React.HTMLProps<HTMLElement> & { rendered: string }> = {
      type: "element",
      component: Switch,
      props: {
        rendered: stringify(node),
      },
    };

    return element;
  },
};
