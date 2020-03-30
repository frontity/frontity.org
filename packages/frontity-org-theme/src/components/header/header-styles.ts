import { css } from "frontity";
import { State } from "frontity/types";

import FrontityOrg from "../../../types";
import { addAlpha } from "../../utils";

export const generalStyles = ({ state }: { state: State<FrontityOrg> }) => css`
  font-family: Poppins;

  > div.wp-block-group {
    padding: 48px 0 !important; /* TODO: !important should not be needed */

    > div.wp-block-group__inner-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      > * {
        flex-grow: 0;
        flex-basis: auto;
      }

      /* Frontity Logo */
      figure {
        margin: 0;

        > img {
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
        > ul > li > a > span.wp-block-navigation-link__label {
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
`;

export const onDesktop = ({ state }: { state: State<FrontityOrg> }) => css``;

/* Mobile view */

export const onMobile = ({
  state,
  isMenuOpen,
}: {
  state: State<FrontityOrg>;
  isMenuOpen;
}) => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 0 16px;
  border-bottom: 1px solid
    ${isMenuOpen ? "transparent" : addAlpha(state.theme.colors.primary, 0.08)};

  > div.wp-block-group {
    margin: 0 !important;
    padding: 24px 0 !important; /* TODO: !important should not be needed */

    figure {
      img {
        height: 24px;
        width: auto;
      }
    }

    > div.wp-block-group__inner-container {
      cursor: pointer;

      .frontity-nav {
        position: fixed;
        z-index: 10;
        top: 73px;
        left: 0;
        right: 0;
        bottom: 0;
        display: block;
        padding: 0 16px 16px 16px;
        background-color: ${addAlpha(state.theme.colors.wall, 0.9)};
        display: ${isMenuOpen ? "block" : "none"};

        > div.wp-block-group__inner-container {
          overflow-y: auto;
          padding: 0 16px;
          border-radius: 12px;
          background-color: #ffffff;
          box-shadow: 0 4px 14px 0 rgba(31, 56, 197, 0.09),
            0 2px 4px 0 rgba(31, 56, 197, 0.12);
        }

        .wp-block-group__inner-container {
          flex-direction: column;
          align-items: stretch;
        }

        .wp-block-navigation-link {
          border-top: 1px solid ${addAlpha(state.theme.colors.primary, 0.08)};
          padding: 24px 0;
          font-size: 14px;
          line-height: 21px;
          a {
            color: ${state.theme.colors.frontity};
          }
        }

        /* Frontity Navbar - links */
        nav.frontity-nav-links {
          .wp-block-navigation-link {
            margin-left: 0;

            :first-child {
              border-top: none;
            }
          }
        }

        /* Frontity Navbar - separator */
        .wp-block-separator {
          display: none;
        }

        /* Frontity Navbar - icons */
        nav.frontity-nav-icons {
          /* Show text for labels on Desktop */
          > ul > li > a > span.wp-block-navigation-link__label {
            font-size: unset;
            vertical-align: text-bottom;
          }
        }
      }
    }
  }
`;
