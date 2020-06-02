import { connect, css, Global, styled } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";
import Footer from "./footer";
import { FixedHeader, Header } from "./headers";
import Page from "./page";
import PageError from "./page-error";
import ScrollButton from "./scroll-button";
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

      <FontFace />
      {/* {state.theme.isTopBannerVisible && <TopBanner />}
      <HeaderContainer>
        <Header />
        <FixedHeader />
      </HeaderContainer> */}

      {(data.isPage && (
        <>
          <Global styles={homepageStyles(state.theme)} />
          <Page />
        </>
      )) ||
        (data.isError && <PageError />)}
      {/* <Footer /> */}
      <ScrollButton />
    </>
  );
};

export default connect(Theme);

const HeaderContainer = styled.div`
  position: relative;
`;
