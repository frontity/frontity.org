import { connect, Head } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import FrontityOrg from "../../../types";
import HeaderButton from "./header-button";
import { fixedHeaderStyles, headerStyles } from "./header-styles";

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
    const styles = headerStyles({ state, isMenuOpen });

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

    return (
      <div css={fixedHeaderStyles({ state })}>
        {/* Render the template */}
        <Html2React html={header.content.rendered} />
      </div>
    );
  }
);

export default Header;
