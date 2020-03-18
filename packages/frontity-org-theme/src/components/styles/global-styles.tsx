import { css } from "frontity";
import FrontityOrg from "../../../types";
import { addAlpha } from "../../utils";

const cssReset = css`
  html,
  body {
    border: none;
    margin: 0;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  address,
  big,
  cite,
  code,
  em,
  font,
  img,
  small,
  strike,
  sub,
  sup,
  li,
  ol,
  ul,
  fieldset,
  form,
  label,
  legend,
  button,
  table,
  caption,
  tr,
  th,
  td {
    border: none;
    font-size: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
    text-align: inherit;
  }
  blockquote::before,
  blockquote::after {
    content: "";
  }
  a,
  path {
    transition: all 0.15s linear;
  }
`;

const documentSetup = (colors: FrontityOrg["state"]["theme"]["colors"]) => css`
  body {
    background: ${colors.wall};
    font-family: "IBMPlexSans";
    color: ${addAlpha(colors.primary, 0.8)};
    max-width: 1080px;
    margin: auto;
    font-size: 16px;
    line-height: 24px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins";
    color: ${colors.primary};
  }
  img {
    max-width: 100%;
  }
`;

const elementBase = (colors: FrontityOrg["state"]["theme"]["colors"]) => css`
  h1 {
    font-size: 48px;
    line-height: 72px;
    strong {
      color: ${colors.frontity};
    }
  }
  h2 {
    font-size: 32px;
    line-height: 40px;
  }
  h3 {
    font-size: 24px;
    line-height: 32px;
  }
  h4 {
    font-size: 20px;
    line-height: 24px;
  }
  h5 {
    font-size: 14px;
    line-height: 21px;
    color: ${addAlpha(colors.primary, 0.4)};
    text-transform: uppercase;
  }
  ul,
  ol {
    list-style-position: inside;
  }
  ul {
    list-style-type: "→ ";
  }
  /* PrismJS 1.19.0
https://prismjs.com/download.html#themes=prism-dark&languages=markup+clike+javascript+jsx */
  /**
 * prism.js Dark theme for JavaScript, CSS and HTML
 * Based on the slides of the talk “/Reg(exp){2}lained/”
 * @author Lea Verou
 */

  code[class*="language-"],
  pre[class*="language-"] {
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 0.78rem;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.65;
    color: ${colors.wall};

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: hsl(30, 20%, 50%);
  }

  .token.punctuation {
    opacity: 0.7;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol {
    color: ${colors.red};
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: ${colors.grass};
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: ${colors.orange};
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: ${colors.red};
  }

  .token.regex,
  .token.important {
    color: ${colors.turqoise};
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.deleted {
    color: red;
  }
`;

const globalStyle = (colors: FrontityOrg["state"]["theme"]["colors"]) =>
  css([cssReset, documentSetup(colors), elementBase(colors)]);

export default globalStyle;
