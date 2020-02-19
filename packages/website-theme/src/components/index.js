import React from "react";
import Page from "./page";
import { connect, Global, css } from "frontity";
import globalStyles from "./styles/global-styles";
import FontFace from "./styles/font-face";
import gutenbergStyle from "./styles/gutenberg/style.css";
import gutenbergTheme from "./styles/gutenberg/theme.css";

const Theme = ({ state }) => {
  return (
    <>
      <Global styles={globalStyles(state.theme.colors)} />
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <FontFace />
      <Page />
    </>
  );
};

export default connect(Theme);
