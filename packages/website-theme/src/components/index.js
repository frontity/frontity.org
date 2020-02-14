import React from "react";
import Page from "./page";
import { connect, Global } from "frontity";
import globalStyles from "./styles/global-styles";
import FontFace from "./styles/font-face";

const Theme = ({ state }) => {
  return (
    <>
      <Global styles={globalStyles(state.theme.colors)} />
      <FontFace />
      <Page />
    </>
  );
};

export default connect(Theme);
