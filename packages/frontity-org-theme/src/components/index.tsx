import { connect, css, Global } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";
import Footer from "./footer";
import { FixedHeader, Header } from "./headers";
import Page from "./page";
import ScrollButton from "./scroll-button";
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
      <Header />
      <FixedHeader />
      {(data.isPage && <Page />) || (
        <>
          <a href="/homepage">Visit /homepage</a>
          <br />
          <a href="/common-styles/">Visit /common-styles/</a>
        </>
      )}
      <Footer />
      <ScrollButton />
    </>
  );
};

export default connect(Theme);
