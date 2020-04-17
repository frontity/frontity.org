import { css } from "frontity";

import FrontityOrg from "../../../types";

const homePageStyles = (state: FrontityOrg["state"]["theme"]) => css`
  .description {
    margin-bottom: 22px;
    opacity: 0.85;

    @media only screen and (max-width: 769px) {
      font-size: 16px;
      letter-spacing: 0;
      line-height: 24px;
    }
  }

  ul {
    opacity: 0.85;
  }

  /* Hero section */
  .hero-homepage {
    background-color: #f2f3fc;
    position: relative;
    padding-top: ${state.headerHeight}px;
    clip-path: polygon(0 0, 100% 0, 100% 92%, 0% 100%);

    &:after {
      content: "";
      display: block;
      position: absolute;
      background-color: rgb(236, 237, 246);
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      height: 100%;
      width: 100%;

      clip-path: polygon(0 100%, 100% 85%, 100% 92%);
    }

    .hero-text {
      margin-bottom: 35px;
      font-size: 20px;
      line-height: 32px;
      opacity: 0.8;
    }

    .get-started-button {
      margin-right: 24px;
      margin-left: 2px;
    }

    /* The Get Started & Demo buttons */
    .wp-block-buttons {
      margin-bottom: 60px;
    }

    @media only screen and (max-width: 769px) {
      .hero-title {
        margin-top: 28px;
        font-size: 32px;
        line-height: 40px;
      }
    }
  }

  /* How Frontity works section */
  .wp-block-group.how-frontity-works {
    padding: 100px 0px 124px;

    & > div > p.description {
      margin-bottom: 55px;
    }

    @media only screen and (max-width: 769px) {
      padding: 80px 0px 40px;
    }
  }

  /* WP and React made easy section */
  .wp-block-group.wp-react-made-easy {
    padding: 100px 0px 136px;
    clip-path: polygon(0 0, 100% 40px, 100% 100%, 0 calc(100% - 72px));

    /* The descrption */
    & > div > p {
      margin-bottom: 52px;
    }

    /* The 01, 02, 03, 04 numbers on corresponding flow-items */
    h5 {
      margin-bottom: 9px;
    }

    ul {
      list-style-position: outside;
      margin-left: 1.3em;
    }

    /* The Learn More button */
    a {
      margin-bottom: 30px;
    }

    /* desktop */
    @media only screen and (min-width: 769px) {
      .frontity-flow-all-items > div > * {
        padding: 45px 65px 20px 55px;
      }

      .terminal,
      pre {
        width: auto;
      }
    }

    /* mobile */
    @media only screen and (max-width: 769px) {
      padding: 90px 0px 48px;
      clip-path: polygon(0 0, 100% 24px, 100% 100%, 0 calc(100% - 24px));
    }
  }

  /* Wrapping section */
  .wp-block-group.wrapping-section {
    padding: 60px 0px 120px;
    clip-path: polygon(
      100% 0,
      100% calc(100% - 50px),
      50% 100%,
      0 calc(100% - 50px),
      0 0
    );

    .wp-block-button > a {
      margin-left: -1em;
    }

    @media only screen and (max-width: 769px) {
      padding: 80px 0px 170px;
      clip-path: polygon(
        100% 0,
        100% calc(100% - 28px),
        50% 100%,
        0 calc(100% - 28px),
        0 0
      );
    }
  }

  /* Keep editing your content section */

  /* As fast a Static Site Generator section */

  /* Why WP and why React section */

  /* Why Frontity section */
  .wp-block-group.why-frontity {
    padding: 120px 0px 84px;

    @media only screen and (max-width: 769px) {
      padding: 100px 0px 120px;
    }
  }

  /* Need inspiration section */
  .wp-block-group.need-inspiration-section {
    padding: 100px 0px 0px;
    clip-path: polygon(
      0 0,
      100% 48px,
      100% calc(100% - 50px),
      0 calc(100% - 94px)
    );

    @media only screen and (max-width: 769px) {
      padding: 60px 0px 0px;
    }
  }

  /* Get Help section */
  .wp-block-group.faq-section {
    padding: 160px 0px 108px;

    @media only screen and (max-width: 769px) {
      padding: 120px 0px 40px;
    }
  }

  /* What people are saying section */
  .wp-block-group.faq-section {
    padding: 160px 0px 108px;

    @media only screen and (max-width: 769px) {
      padding: 120px 0px 40px;
    }
  }

  /* Closing section */
`;

export default homePageStyles;
