import { connect, css } from "frontity";
import { Connect, State } from "frontity/types";
import React from "react";

import FrontityOrg from "../../types";
import { addAlpha } from "../utils";

const burgerMenu = ({ color }: { color: string }) => css`
  @media only screen and (min-width: 866px) {
    display: none;
  }

  cursor: pointer;

  padding: 0;
  border: none;
  background-color: transparent;
  width: 24px;
  height: 24px;

  &:after {
    content: " ";
    display: block;
    box-sizing: border-box;
    margin: 6px 3px;
    width: 18px;
    height: 12px;
    background: linear-gradient(
      to bottom,
      ${color} 0px,
      ${color} 2px,
      transparent 2px,
      transparent 5px,
      ${color} 5px,
      ${color} 7px,
      transparent 7px,
      transparent 10px,
      ${color} 10px,
      ${color} 12px
    );
  }
`;

const headerStyles = ({
  state,
  isMenuOpen,
}: {
  state: State<FrontityOrg>;
  isMenuOpen;
}) => css`
  font-family: Poppins;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & > * {
    flex-grow: 0;
    flex-basis: auto;
  }

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

          /* Tooltip styles */
          &.has-child > .wp-block-navigation__container {
            left: unset;
            right: 0;

            padding: 2px 24px;
            border: none;
            border-radius: 8px;
            box-shadow: 0 4px 14px 0 rgba(31, 56, 197, 0.09),
              0 2px 4px 0 rgba(31, 56, 197, 0.12);

            /* Arrow */
            &:after {
              content: " ";
              width: 16px;
              height: 16px;
              position: absolute;
              top: 0;
              right: 12px;

              transform: translate(-50%, -50%) rotate(45deg);

              background-color: white;
              border-left: 1px solid rgba(31, 56, 197, 0.09);
              border-top: 1px solid rgba(31, 56, 197, 0.09);
            }

            li {
              padding: 16px 0;
              border-bottom: 1px solid
                ${addAlpha(state.theme.colors.primary, 0.08)};
              &:last-child {
                border-bottom: none;
              }
            }

            a {
              font-family: "IBMPlexSans";
              color: ${state.theme.colors.primary};
            }

            /* icons margin */
            img {
              margin-right: 12px;
            }
          }
        }
      }
    }
  }

  /* Mobile view */
  @media only screen and (max-width: 865px) {
    margin: 0 16px;
    border-bottom: 1px solid ${addAlpha(state.theme.colors.primary, 0.08)};

    & > div.wp-block-group {
      margin: 0 !important;
      padding: 24px 0 !important; /* TODO: !important should not be needed */

      figure {
        img {
          height: 24px;
          width: auto;
        }
      }

      & > div.wp-block-group__inner-container {
        cursor: pointer;

        &:after {
          ${burgerMenu({ color: state.theme.colors.frontity })};
        }

        .frontity-nav {
          display: ${isMenuOpen ? "fixed" : "none"};
        }
      }
    }
  }
`;

const Header: React.FC<Connect<FrontityOrg>> = ({ state, libraries }) => {
  const data = state.source.get("/wp_template_part/header/");
  const header = state.source["wp_template_part"][data.id];
  const Html2React = libraries.html2react.Component;

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div css={headerStyles({ state, isMenuOpen })}>
      <Html2React html={header.content.rendered} />
      <button
        css={burgerMenu({ color: state.theme.colors.frontity })}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </div>
  );
};

export default connect(Header);
