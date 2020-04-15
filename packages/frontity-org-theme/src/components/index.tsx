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
import homepageStyles from "./styles/homepage";

const Theme: React.FC<Connect<FrontityOrg>> = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <Global styles={globalStyles(state.theme.colors)} />

      <FontFace />
      <Header />
      <FixedHeader />

      {(data.isPage && (
        <>
          <Global styles={homepageStyles(state.theme.colors)} />
          <Page />
        </>
      )) || (
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
