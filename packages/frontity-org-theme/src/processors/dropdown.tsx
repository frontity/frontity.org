import { Element, Processor } from "@frontity/html2react/types";

import Dropdown from "../components/dropdown";

interface DropdownItem extends Element {
  children: [DropdownInnerContainer];
}

interface DropdownInnerContainer extends Element {
  children: [Element, Element];
}

export const dropdown: Processor<DropdownItem> = {
  name: "dropdown",
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className &&
    node.props.className.split(" ").includes("dropdown-item"),
  processor: ({ node }) => {
    // Get children from the inner component.
    const [dropdownButton, dropdownContent] = node.children[0].children;

    return {
      ...node,
      /**
       * Set them as "children" (we cannot pass them as other props because)
       * they wouldn't be rendered. Also, other processors wouldn't run.
       */
      children: [dropdownButton, dropdownContent],
      // Change node component by Dropdown.
      component: Dropdown,
    };
  },
};
