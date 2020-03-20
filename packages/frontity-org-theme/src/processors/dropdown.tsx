import Dropdown from "../components/dropdown";

export const dropdown = {
  name: "box-shadow",
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className &&
    node.props.className.split(" ").includes("dropdown-item"),
  processor: ({ node }) => {
    if (node.type === "element") {
      // Get children from the inner component.
      const [dropdownButton, dropdownContent] = node.children[0].children;

      /**
       * Set them as "children" (we cannot pass them as other props because)
       * they wouldn't be rendered. Also, other processors wouldn't run.
       */
      node.children = [dropdownButton, dropdownContent];

      // Change node component by Dropdown.
      node.component = Dropdown;
    }
    return node;
  }
};
