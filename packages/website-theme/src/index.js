import React from "react";

const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/website-theme/src/index.js</pre>
    </>
  );
};

export default {
  name: "website-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
