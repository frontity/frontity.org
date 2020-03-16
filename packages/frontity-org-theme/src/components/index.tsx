import React from "react";
import { connect, Global, css } from "frontity";
import { Connect } from "frontity/types";
import FrontityOrg from "../../types";
import Page from "./page";
import globalStyles from "./styles/global-styles";
import FontFace from "./styles/font-face";
import gutenbergStyle from "./styles/gutenberg/style.css";
import gutenbergTheme from "./styles/gutenberg/theme.css";

import BackgroundWithTriangles from "../components/background-with-triangles";

const Theme: React.FC<Connect<FrontityOrg>> = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global styles={globalStyles(state.theme.colors)} />
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <FontFace />
      <BackgroundWithTriangles>
        <h1>This is how it will going to be</h1>
      </BackgroundWithTriangles>
      {(data.isPage && <Page />) || (
        <>
          <a href="/homepage">Visit /homepage</a>
          <br />
          <a href="/common-styles/">Visit /common-styles/</a>
        </>
      )}
    </>
  );
};

export default connect(Theme);
