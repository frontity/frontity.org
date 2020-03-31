import { connect, css, Head } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../../types";
import HeaderButton from "./header-button";
import { desktopStyles, generalStyles, mobileStyles } from "./header-styles";

export const Header = connect<React.FC<Connect<FrontityOrg>>>(
  ({ state, libraries }) => {
    // Get the header template.
    const data = state.source.get("/wp_template_part/header/");
    const header = state.source["wp_template_part"][data.id];

    // Get the component that transform the template to React.
    const Html2React = libraries.html2react.Component;

    // Store if the menu is open (for the mobile view).
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    // Generate styles.
    const styles = css`
      ${generalStyles({ state })};
      @media only screen and (min-width: 866px) {
        ${desktopStyles({ state })};
      }
      @media only screen and (max-width: 865px) {
        ${mobileStyles({ state, isMenuOpen })};
      }
    `;

    return (
      <div css={styles}>
        {/* Render the template */}
        <Html2React html={header.content.rendered} />
        {/* Render the menu button (only on mobile).*/}
        <HeaderButton
          color={state.theme.colors.frontity}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {/* Make body unscrollabe when menu is open (only on mobile). */}
        {isMenuOpen && (
          <Head>
            <style>{`body { overflow-y: hidden; }`}</style>
          </Head>
        )}
      </div>
    );
  }
);

export const FixedHeader = connect<React.FC<Connect<FrontityOrg>>>(
  ({ state, libraries }) => {
    // Get the header template.
    const data = state.source.get("/wp_template_part/fixed-header/");
    const header = state.source["wp_template_part"][data.id];

    // Get the component that transform the template to React.
    const Html2React = libraries.html2react.Component;

    // Store if the menu is open (for the mobile view).
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    // Generate styles.
    const styles = css`
      ${generalStyles({ state })};
      ${desktopStyles({ state })};

      position: fixed;
      top: 0;
      left: 0;
      right: 0;

      > .wp-block-group {
        margin: 0 0 0 0 !important;
        padding: 0 0 0 0 !important;
        width: 100%;
        max-width: unset !important;
        > .wp-block-group__inner-container {
          margin: 0 auto;
          max-width: 1080px;
        }
      }
    `;

    return (
      <div css={styles}>
        {/* Render the template */}
        <Html2React html={header.content.rendered} />
        {/* Render the menu button (only on mobile).*/}
        <HeaderButton
          color={state.theme.colors.frontity}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {/* Make body unscrollabe when menu is open (only on mobile). */}
        {isMenuOpen && (
          <Head>
            <style>{`body { overflow-y: hidden; }`}</style>
          </Head>
        )}
      </div>
    );
  }
);

export default Header;
