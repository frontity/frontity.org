import { connect, css } from "frontity";
import { Connect, State } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";
import { addAlpha } from "../utils";

const headerStyles = ({ state }: { state: State<FrontityOrg> }) => css`
  font-family: Poppins;

  & > div.wp-block-group {
    padding: 48px 0 !important; /* TODO: !important should not be needed */

    & > div.wp-block-group__inner-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      & > * {
        flex-grow: 0;
        flex-basis: auto;
      }

      /* Frontity Logo */
      figure {
        margin: 0;

        & > img {
          display: block;
        }
      }

      /* General styles for the navbar container */
      .frontity-nav > .wp-block-group__inner-container {
        display: flex;
        flex-direction: row;
        align-items: center;

        .wp-block-navigation {
          width: auto;
        }

        .wp-block-navigation-link__content {
          padding: 0;
        }

        a:hover {
          color: ${state.theme.colors.frontity};
          opacity: 1;
        }
      }

      /* Frontity Navbar - links */
      nav.frontity-nav-links {
        .wp-block-navigation-link {
          margin-left: 40px;
        }
      }

      /* Frontity Navbar - separator */
      .wp-block-separator {
        margin: 0 24px;
        width: 1px;
        height: 20px;
        background-color: ${addAlpha(state.theme.colors.primary, 0.12)};
        border: none;
      }

      /* Frontity Navbar - icons */
      nav.frontity-nav-icons {
        /* Hide text for labels on Desktop */
        & > ul > li > a > span.wp-block-navigation-link__label {
          font-size: 0;
          vertical-align: text-bottom;
        }

        .wp-block-navigation-link {
          padding-right: 16px;

          .wp-block-navigation-link__submenu-icon {
            display: none;
          }
        }
      }
    }
  }
`;

const Header: React.FC<Connect<FrontityOrg>> = ({ state, libraries }) => {
  const data = state.source.get("/wp_template_part/header/");
  const header = state.source["wp_template_part"][data.id];
  const Html2React = libraries.html2react.Component;

  return (
    <div css={headerStyles({ state })}>
      <Html2React html={header.content.rendered} />
    </div>
  );
};

export default connect(Header);
