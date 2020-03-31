import { css } from "frontity";
import { State } from "frontity/types";

import FrontityOrg from "../../../types";
import { addAlpha } from "../../utils";

const tooltipStyles = ({ state }: { state: State<FrontityOrg> }) => css`
  left: unset;
  right: -12px;

  padding: 2px 24px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 14px 0 rgba(31, 56, 197, 0.09),
    0 2px 4px 0 rgba(31, 56, 197, 0.12);

  align-items: stretch;

  /* Arrow */
  :after {
    content: " ";
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    right: 9px;

    transform: translate(-50%, -50%) rotate(45deg);

    background-color: white;
    border-left: 1px solid rgba(31, 56, 197, 0.09);
    border-top: 1px solid rgba(31, 56, 197, 0.09);
  }

  .wp-block-navigation-link {
    color: ${state.theme.colors.primary};
    padding: 16px 0;
    margin: 0;
    border-bottom: 1px solid ${addAlpha(state.theme.colors.primary, 0.08)};
    :last-child {
      border-bottom: none;
    }
  }

  .wp-block-navigation-link__content {
    padding: 0;
    font-family: "IBMPlexSans";
  }

  /* icons margin */
  .wp-block-navigation-link__label img {
    margin-right: 12px;
  }
`;

export const generalStyles = ({ state }: { state: State<FrontityOrg> }) => css`
  font-family: Poppins;

  /* Remove margins from the logo */
  .wp-block-image {
    margin: 0;
  }

  /* Change display to block for better positioning */
  .wp-block-image img {
    display: block;
  }

  /* Turn inner containers into flexboxes */
  .wp-block-group__inner-container {
    display: flex;

    > * {
      flex-grow: 0;
      flex-basis: auto;
    }
  }

  /* General styles for nav blocks */
  .wp-block-navigation {
    width: auto;

    .wp-block-navigation-link {
      .wp-block-navigation-link__content {
        padding: 0;
        :hover {
          color: ${state.theme.colors.frontity};
          opacity: 1;
        }
      }
      /* Hide arrow icon for submenu */
      .wp-block-navigation-link__submenu-icon {
        display: none;
      }
    }
  }
`;

export const desktopStyles = ({ state }: { state: State<FrontityOrg> }) =>
  css`
    /* Fix section margin */
    > .wp-block-group {
      padding: 48px 0 !important; /* TODO: !important should not be needed */
    }

    /* Turn inner containers into flex rows */
    .wp-block-group__inner-container,
    .wp-block-navigation__container {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    /* Frontity Navbar - links */
    .frontity-nav-links {
      .wp-block-navigation-link {
        margin-left: 40px;
        .wp-block-navigation-link__content {
          padding: 0;
        }
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
    .frontity-nav-icons {
      .wp-block-navigation-link {
        margin-right: 16px;
      }
    }

    /* Frontity Navbar - icons */
    .frontity-nav-icons {
      /* Hide text for labels on Desktop */
      > .wp-block-navigation__container
        > .wp-block-navigation-link
        > .wp-block-navigation-link__content
        > .wp-block-navigation-link__label {
        font-size: 0;
        vertical-align: text-bottom;
      }

      .wp-block-navigation-link {
        margin-right: 16px;

        /* Tooltip styles */
        &.has-child > .wp-block-navigation__container {
          ${tooltipStyles({ state })};
        }
      }
    }
  `;

/* Mobile view */

export const mobileStyles = ({
  state,
  isMenuOpen,
}: {
  state: State<FrontityOrg>;
  isMenuOpen;
}) => css`
  /* Change the top container style */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 16px;
  border-bottom: 1px solid
    ${isMenuOpen ? "transparent" : addAlpha(state.theme.colors.primary, 0.08)};

  /* Fix section margin */
  > .wp-block-group {
    margin: 0 !important;
    padding: 24px 0 !important; /* TODO: !important should not be needed */
  }

  /* Turn inner containers into flex columns */
  .wp-block-group__inner-container,
  .wp-block-navigation__container {
    flex-direction: column;
    align-items: stretch;
  }

  /* Make logo smaller */
  .wp-block-image img {
    height: 24px;
  }

  /* Navbar container */
  .frontity-nav {
    /* Hide when the menu is closed */
    display: ${isMenuOpen ? "block" : "none"};
    /* Fixed and filling the space below the navbar */
    position: fixed;
    top: 73px;
    left: 0;
    right: 0;
    bottom: 0;
    /* Above other elements */
    z-index: 10;
    padding: 0 16px 16px 16px;
    background-color: ${addAlpha(state.theme.colors.wall, 0.9)};

    > .wp-block-group__inner-container {
      /* Place to the right and with a max width (for tablet view) */
      margin-left: auto;
      max-width: 400px;
      max-height: 100%;
      overflow-y: auto;
      padding: 0 16px 12px 26px;
      border-radius: 12px;
      background-color: #ffffff;
      box-shadow: 0 4px 14px 0 rgba(31, 56, 197, 0.09),
        0 2px 4px 0 rgba(31, 56, 197, 0.12);
    }
  }

  /* Link block */
  .wp-block-navigation {
    .wp-block-navigation-link {
      flex-direction: column;
      color: ${state.theme.colors.frontity};
      border-top: 1px solid ${addAlpha(state.theme.colors.primary, 0.08)};
      font-size: 14px;
      line-height: 21px;
      .wp-block-navigation-link__content {
        padding: 24px 8px;
      }
      .wp-block-navigation-link__label {
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
          margin-right: 12px;
        }
      }
    }
  }
  /* Frontity Navbar - links */
  .frontity-nav-links {
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

  /* Frontity Navbar - icons submenu */
  .frontity-nav-icons
    .wp-block-navigation-link.has-child
    > .wp-block-navigation__container {
    max-width: none;
    position: static;
    visibility: visible;
    opacity: 1;
    border: none;
    margin-left: 36px;

    .wp-block-navigation-link {
      font-family: "IBMPlexSans";
      font-size: 16px;
      letter-spacing: 0;
      line-height: 20px;
      a {
        color: ${state.theme.colors.primary};
      }
    }

    .wp-block-navigation-link__content {
      padding: 12px 0;
    }
  }
`;
