import { connect, Head, useConnect } from "frontity";
import { Connect } from "frontity/types";
import { isPostType } from "@frontity/source";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import FrontityOrg, { Packages } from "../../../types";
import HeaderButton from "./header-button";
import { fixedHeaderStyles, headerStyles } from "./header-styles";

export const Header = connect(() => {
  const { state, actions, libraries } = useConnect<Packages>();
  // Get the header template.
  const data = state.source.get("/blog/wp_template_part/header-web/");

  // Bail out if the data returned doesn't belong to a post type.
  if (!isPostType(data)) return null;

  const header = state.source["wp_template_part"][data.id];

  // Get the component that transform the template to React.
  const Html2React = libraries.html2react.Component;

  // Store if the menu is open (for the mobile view).
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [state.router.link])

  // Check if this bar is visible or not.
  const [ref, isInView] = useInView();

  React.useEffect(() => {
    if (isInView) {
      actions.theme.hideFixedHeader();
    } else {
      actions.theme.showFixedHeader();
    }
  }, [isInView]);

  // Generate styles.
  const styles = headerStyles({ state, isMenuOpen });

  return (
    <div ref={ref} css={styles}>
      {/* Render the template */}
      <Html2React html={header.content.rendered} />
      {/* Render the menu button (only on mobile).*/}
      <HeaderButton
        color={state.theme.colors.frontity}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />
      {/* Make body unscrollabe when menu is open (only on mobile). */}
      {isMenuOpen && (
        <Head>
          <style>{`body { overflow-y: hidden; }`}</style>
        </Head>
      )}
    </div>
  );
});

export const FixedHeader = connect(() => {
  const { state, libraries } = useConnect<Packages>();
  // Get the header template.
  const data = state.source.get("/blog/wp_template_part/fixed-header/");

  // Bail out if the data returned doesn't belong to a post type.
  if (!isPostType(data)) return null;

  const header = state.source["wp_template_part"][data.id];

  // Get the component that transform the template to React.
  const Html2React = libraries.html2react.Component;
  const { isFixedHeaderVisible } = state.theme;

  return (
    <div css={fixedHeaderStyles({ state, isFixedHeaderVisible })}>
      {/* Render the template */}
      <Html2React html={header.content.rendered} />
    </div>
  );
});
