import { warn } from "frontity";
import React from "react";

import Prism from "./prism";

// Disable the automatic code highlighting of all <code> elements on the client
// because we are doing it ourselves with a processor.
Prism.manual = true;

const Code = ({ code }) => (
  <code dangerouslySetInnerHTML={{ __html: code }}></code>
);

export const prismProcessor = {
  name: "prism-processor",
  test: ({ node }) =>
    node.type === "element" &&
    node.component === "code" &&
    node.parent.component === "pre" &&
    node.parent.props?.className?.match(/language-/),
  processor: ({ node }) => {
    // Capture the language of the snippet
    const result = node.parent.props?.className?.match(/language-(\w*)\b/);

    // Get the content of the <code> elements
    let code = node.children[0].content;

    // Try to get highlight the snippet according to the syntax guessed from the
    // "language-***"" CSS class
    try {
      const language = result[1];
      code = Prism.highlight(code, Prism.languages[language], language);
    } catch (e) {
      warn(
        `An incorrect "${result[0]}" CSS class has been specified on the <code> element
        so no syntax highlighting was applied. It could be because this language is not
        recognized by prism.js or because of a typo.\n`
      );
    }

    node.component = Code;
    node.props = { code };
    return node;
  },
};
