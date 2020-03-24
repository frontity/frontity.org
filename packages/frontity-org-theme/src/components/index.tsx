import { connect, css, Global } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";
import BackgroundWithTriangles from "../components/background-with-triangles";
import Page from "./page";
import FontFace from "./styles/font-face";
import globalStyles from "./styles/global-styles";
import gutenbergStyle from "./styles/gutenberg/style.css";
import gutenbergTheme from "./styles/gutenberg/theme.css";

const Theme: React.FC<Connect<FrontityOrg>> = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global styles={globalStyles(state.theme.colors)} />
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <FontFace />
      <BackgroundWithTriangles>
        <h1>This is how it is going to be</h1>
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
