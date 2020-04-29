import { css } from "frontity";
import { State } from "frontity/types";

import FrontityOrg from "../../../types";
import { addAlpha } from "../../utils";

const tooltipStyles = ({ state }: { state: State<FrontityOrg> }) => css`
  left: unset;
  right: -12px;
  top: calc(100% + 16px);

  padding: 2px 24px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 14px 0 rgba(31, 56, 197, 0.09),
    0 2px 4px 0 rgba(31, 56, 197, 0.12);

  align-items: stretch;

  transition: opacity 0.1s linear 0.5s, visibility 0.1s linear 0.5s;

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
    width: 16px;
    height: 16px;
    object-fit: contain;
    position: relative;
    top: 3px;
    vertical-align: top;
  }
`;

export const generalStyles = ({ state }: { state: State<FrontityOrg> }) => css`
  font-family: Poppins;

  background-color: transparent;

  > .wp-block-group {
    padding: 0;
    > .wp-block-group__inner-container {
      margin: auto;
      max-width: 1080px;
    }
  }

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
      min-height: fit-content;
      .wp-block-navigation-link__content {
        padding: 0;
        :hover {
          color: ${state.theme.colors.frontity};
          opacity: 1;
        }
      }
    }
  }
`;

export const desktopStyles = ({ state }: { state: State<FrontityOrg> }) =>
  css`
    /* Turn inner containers into flex rows */
    .wp-block-group__inner-container,
    .wp-block-navigation__container {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    /* Frontity Navbar - links */
    .wp-block-navigation {
      /* Final padding at the right of the navbar */
      padding-right: 8px;

      .wp-block-navigation-link {
        align-items: center;

        /* Margins for links with only text */
        &:not(.is-link-with-icon) {
          margin-left: 40px;
        }

        /* Margins for links with icons */
        &.is-link-with-icon {
          margin-left: 16px;
          /* Tooltip styles */
          &.has-child > .wp-block-navigation__container {
            ${tooltipStyles({ state })};
          }
        }

        .wp-block-navigation-link__content {
          padding: 0;
        }
      }

      /* Separator between links */
      .wp-block-navigation-link:not(.is-link-with-icon) + .is-link-with-icon {
        margin-left: 0;
        &::before {
          content: " ";
          margin: 0 24px;
          width: 1px;
          height: 20px;
          background-color: ${addAlpha(state.theme.colors.primary, 0.12)};
          border: none;
        }
      }

      /* Style links with icons */
      .wp-block-navigation-link.is-link-with-icon
        > .wp-block-navigation-link__content
        > .wp-block-navigation-link__label {
        font-size: 0;
        vertical-align: text-bottom;

        /* Change icon color on hover */
        &:hover {
          img {
            filter: saturate(2.6) hue-rotate(5deg);
          }
        }
      }
    }

    /* Hide the 'Get Started' button on small screens, otherwise it makes the icons overflow to the next row */
    .wp-block-buttons {
      @media screen and (max-width: 940px) {
        display: none;
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
  .wp-block-navigation {
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

    > .wp-block-navigation__container {
      /* Move right and set a max-width (for tablet view) */
      margin-left: auto;
      max-width: 400px;
      max-height: 100%;
      overflow-y: auto;
      padding: 0 16px 12px 16px;
      border-radius: 12px;
      background-color: #ffffff;
      box-shadow: 0 4px 14px 0 rgba(31, 56, 197, 0.09),
        0 2px 4px 0 rgba(31, 56, 197, 0.12);

      /* Arrows at the end of the links */
      > .wp-block-navigation-link > .wp-block-navigation-link__content:after {
        content: " ";
        width: 6px;
        height: 6px;
        border-top: 2px solid ${addAlpha(state.theme.colors.frontity, 0.4)};
        border-right: 2px solid ${addAlpha(state.theme.colors.frontity, 0.4)};
        transform: translate(-50%, -50%) rotate(45deg) scale(1.2);
        position: absolute;
        top: calc(45% + 2px);
        right: 8px;
      }
    }

    .wp-block-navigation-link {
      flex-direction: column;
      color: ${state.theme.colors.frontity};
      border-top: 1px solid ${addAlpha(state.theme.colors.primary, 0.08)};
      font-size: 14px;
      line-height: 21px;
      .wp-block-navigation-link__content {
        padding: 24px 8px;
        width: auto;
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

    .wp-block-navigation-link.is-link-with-icon
      > .wp-block-navigation-link__content
      > .wp-block-navigation-link__label
      img {
      filter: saturate(2.3) hue-rotate(5deg);
    }

    /* Submenu */
    .wp-block-navigation-link.has-child > .wp-block-navigation__container {
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
  }
`;

export const headerStyles = ({
  state,
  isMenuOpen,
}: {
  state: State<FrontityOrg>;
  isMenuOpen;
}) => css`
  ${generalStyles({ state })};

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${state.theme.headerHeight};
  z-index: ${state.theme.zIndices.navBar};

  @media only screen and (min-width: 866px) {
    ${desktopStyles({ state })};

    /* Header padding */
    > .wp-block-group > .wp-block-group__inner-container {
      padding: 48px 0;
    }
  }
  @media only screen and (max-width: 865px) {
    ${mobileStyles({ state, isMenuOpen })};

    /* Header padding */
    > .wp-block-group > .wp-block-group__inner-container {
      padding: 24px 0;
    }
  }
`;

export const fixedHeaderStyles = ({
  state,
  isFixedHeaderVisible,
}: {
  state: State<FrontityOrg>;
  isFixedHeaderVisible: boolean;
}) => css`
  ${generalStyles({ state })};
  ${desktopStyles({ state })};

  /* Header padding */
  > .wp-block-group > .wp-block-group__inner-container {
    padding: 20px 0;
  }

  /* Hide the fixed bar */
  transform: translateY(${isFixedHeaderVisible ? "0" : "-150%"});
  filter: opacity(${isFixedHeaderVisible ? "100%" : "0%"});
  transition: transform 300ms, filter 300ms;

  /* Specific styles */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${state.theme.zIndices.navBar};

  /* Button margins */
  .wp-block-buttons {
    margin-left: 32px;
    .wp-block-button {
      margin: 0;
    }
  }
`;
