import { connect, css, Global, Head, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";
import Footer from "./footer";
import { FixedHeader, Header } from "./headers";
import Page from "./page";
import PageError from "./page-error";
import MetaTitle from "./page-meta-title.js";
import ScrollButton from "./scroll-button";
import cf7Styles from "./styles/cf7";
import FontFace from "./styles/font-face";
import globalStyles from "./styles/global-styles";
import gutenbergStyle from "./styles/gutenberg/style.css";
import gutenbergTheme from "./styles/gutenberg/theme.css";
import homepageStyles from "./styles/homepage";
import TopBanner from "./top-banner";

const Theme: React.FC<Connect<FrontityOrg>> = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <Global styles={globalStyles(state.theme.colors)} />
      <Global styles={cf7Styles(state.theme.colors)} />

      <FontFace />
      <Head>
        <html lang="en" />
      </Head>
      <MetaTitle />

      {state.theme.isTopBannerVisible && <TopBanner />}
      <HeaderContainer>
        <Header />
        <FixedHeader />
      </HeaderContainer>

      {(data.isPostType && (
        <>
          <Global styles={homepageStyles(state.theme)} />
          <Page />
        </>
      )) ||
        (data.isError && <PageError />)}
      <Footer />
      <ScrollButton />
    </>
  );
};

export default connect(Theme);

const HeaderContainer = styled.div`
  position: relative;
`;
