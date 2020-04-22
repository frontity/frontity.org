import { css } from "frontity";

import FrontityOrg from "../../../types";
import { addAlpha } from "../../utils";

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
  /* Top section */
  .top-section {
    position: relative;
    padding-top: ${state.headerHeight}px;
  }
  /* About Us */
  .hero-about-us {
    background-color: #f2f3fc;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 92%, 0% 100%);
    p {
      max-width: 672px;
      margin: auto;
    }
    img {
      margin: 84px auto 20px;
    }
  }
  /* Hero section */
  .hero-homepage {
    background-color: #f2f3fc;
    position: relative;
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

    /* The Learn More button */
    a {
      margin-bottom: 30px;
    }

    .terminal,
    pre {
      width: auto;
    }

    .terminal ol {
      margin-left: 8px;

      li {
        margin-left: 2.4em;

        &:before {
          margin-right: 1em;
          margin-left: -2.4em;
        }
      }
    }

    /* desktop */
    @media only screen and (min-width: 769px) {
      .frontity-flow-all-items > div > * {
        padding: 45px 65px 20px 55px;
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

    a.wp-block-button {
      margin-left: -1em;
    }

    /* As fast a Static Site Generator section */
    .frontity-ssg .wp-block-group .wp-block-columns {
      ol {
        list-style-type: decimal;
        opacity: 0.85;
      }

      .wp-block-column:nth-child(1) {
        padding: 0;
        border: 0;
        padding-right: 2em;
        border-right: 1px solid ${addAlpha(state.colors.primary, 0.12)};
      }

      .wp-block-column:nth-child(2) {
        margin-top: 2em;
      }

      strong {
        font-weight: bold;
      }

      @media only screen and (max-width: 600px) {
        .wp-block-column:nth-child(1) {
          padding: 0;
          border: 0;
          margin: 0;
          border-bottom: 1px solid ${addAlpha(state.colors.primary, 0.12)};
        }
      }
    }

    .demo-iframe {
      margin-bottom: 30px;
    }

    .why-wp-react {
      margin-top: 70px;

      ul {
        margin-left: 0;
      }

      figure {
        margin-top: 50px;
      }

      .wp-block-column {
        margin-left: 50px;
      }
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

  /* Why Frontity section */
  .wp-block-group.why-frontity {
    position: relative;
    padding: 120px 0px 84px;

    &:before {
      content: "";
      display: block;
      position: absolute;
      background: linear-gradient(180deg, transparent 0%, #fff 70%);
      left: 0;
      right: 0;
      top: 0;
      height: 60px;
      width: 100%;
      transform: translateY(-24px);
      clip-path: polygon(
        50% 30px,
        100% 0,
        100% 30px,
        50% calc(30px + 30px),
        0 30px,
        0 0
      );
    }

    .description {
      margin-bottom: 60px;
    }

    .special-link {
      margin-top: 60px;
    }

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

    .dropdown-item {
      margin-top: 20px;
    }

    .get-help-heading > .wp-block-group__inner-container {
      display: flex;

      /* Get help on your project heading */
      .wp-block-group {
        margin-right: 12px;
      }
    }

    .get-help-heading .special-icon {
      margin-bottom: 18px;
    }

    @media only screen and (max-width: 769px) {
      padding: 120px 0px 40px;

      .wp-block-columns > .wp-block-column {
        margin-bottom: 80px;
      }
    }
  }

  /* Testimonial section */
  .wp-block-group.testimonial-homepage {
    padding: 0;
    padding-bottom: 110px;
  }

  .wp-block-group.start-using-frontity {
    padding: 0;
    padding-bottom: 100px;

    .wp-block-column {
      margin-bottom: 20px;

      h2 {
        margin-top: 12px;
      }

      p {
        margin-bottom: 23px;
      }
    }

    .enterprise-projects a {
      margin-left: -1.3em;
    }
  }

  /* Accelerated section  */
  .wp-block-group.accelerated-section {
    .wp-block-group__inner-container {
      position: relative;
      display: grid;
      grid-gap: 1.5em;
      align-items: center;

      figure {
        margin-top: 32px;
      }

      /* mobile */
      @media screen and (max-width: 599px) {
        grid-template-rows: 0.3fr 0.3fr 0.3fr 0.3fr;
        grid-gap: 0;
        justify-items: center;

        figure {
          max-width: 60%;
        }
      }

      /* desktop */
      @media screen and (min-width: 600px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

export default homePageStyles;
