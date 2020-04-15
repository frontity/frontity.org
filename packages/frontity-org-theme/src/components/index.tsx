import { connect, css, Global } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";
import Footer from "./footer";
import { FixedHeader, Header } from "./headers";
import Page from "./page";
import FontFace from "./styles/font-face";
import globalStyles from "./styles/global-styles";
import gutenbergStyle from "./styles/gutenberg/style.css";
import gutenbergTheme from "./styles/gutenberg/theme.css";
import homepageStyles from "./styles/homepage.css";

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
      {/* We have to change to isHome once isHome is true */}
      {data.isPage && <Global styles={css(homepageStyles)} />}
      {(data.isPage && <Page />) || (
        <>
          <a href="/homepage">Visit /homepage</a>
          <br />
          <a href="/common-styles/">Visit /common-styles/</a>
        </>
      )}
      <Footer />
    </>
  );
};

export default connect(Theme);
