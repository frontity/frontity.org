import { warn } from "frontity";
import React from "react";

import Prism from "./prism";

// Disable the automatic code highlighting of all `<code>` elements on the
// client because we are doing it ourselves with a processors.
Prism.manual = true;

const Code = ({ className, children }) => {
  // Capture the language of the snippet.
  const result = className?.match(/language-(\w*)\b/);

  try {
    // Try to get highlight the snippet according to the syntax guessed from the
    // `language-xxx` CSS class.
    const language = result[1];
    children = Prism.highlight(children, Prism.languages[language], language);
  } catch (e) {
    warn(
      `An incorrect "${className}" CSS class has been specified on the <code> element so no syntax highlighting was applied. It could be because this language is not recognized by prism.js or because of a typo.`
    );
  }

  return <code dangerouslySetInnerHTML={{ __html: children }}></code>;
};

export default Code;
