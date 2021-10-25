import { css } from "frontity";

import FrontityOrg from "../../../types";
import { addAlpha } from "../../utils";

const cssReset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    cursor: default;
    line-height: 1.15;
    text-size-adjust: 100%;
    word-break: break-word;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  textarea {
    overflow: auto;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  [aria-disabled="true"],
  [disabled] {
    cursor: not-allowed;
  }

  a,
  area,
  button,
  input,
  label,
  select,
  summary,
  textarea,
  [tabindex] {
    touch-action: manipulation;
  }

  [aria-disabled="true"],
  [hidden] {
    display: none;
  }
  strong,
  b {
    font-weight: bold;
  }
`;

const documentSetup = (colors: FrontityOrg["state"]["theme"]["colors"]) => css`
  body {
    background: ${colors.wall};
    font-family: "IBMPlexSans", Sans-Serif;
    color: ${addAlpha(colors.primary, 0.8)};
    font-size: 16px;
    line-height: 24px;
    overflow-x: hidden;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins", Sans-Serif;
    color: ${colors.primary};
  }
  img {
    max-width: 100%;
  }
  svg,
  img,
  embed,
  object {
    display: block;
    height: auto;
    max-width: 100%;
  }
  //Style the layout
  div#root > div.wp-block-group > div {
    max-width: 1080px;
    margin: auto;
    @media only screen and (max-width: 1080px) {
      padding-right: 16px;
      padding-left: 16px;
    }
  }
`;

const elementBase = (colors: FrontityOrg["state"]["theme"]["colors"]) => css`
  h1 {
    font-size: 48px;
    line-height: 58px;
    margin-bottom: 16px;
  }
  h2 {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 16px;
  }
  h3 {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 8px;
  }
  h4 {
    font-size: 20px;
    line-height: 24px;
    margin: 20px 0 8px;
  }
  h5 {
    font-size: 14px;
    line-height: 21px;
    color: ${addAlpha(colors.primary, 0.4)};
    text-transform: uppercase;
    margin: 12px 0 0;
  }
  ul,
  ol {
    list-style-position: outside;
    margin-left: 1.3em;
  }
  ul {
    list-style-type: "→ ";

    & > li {
      margin: 1.125rem 0;
      line-height: 1.5rem;

      &::before {
        line-height: 0;
        margin: auto 0.5rem auto 0;
      }
    }
  }
`;

const syntaxHighlighting = (
  colors: FrontityOrg["state"]["theme"]["colors"]
) => css`
  /* This is a modified theme for Prism.js
  
  /* PrismJS 1.19.0
      https://prismjs.com/download.html#themes=prism-dark&languages=markup+clike+javascript+jsx 
  */

  code[class*="language-"],
  pre[class*="language-"] {
    font-family: Courier, monospace;
    font-size: 0.78rem;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.65;
    color: ${addAlpha(colors.wall, 0.8)};

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
    color: ${addAlpha(colors.red, 0.8)};
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: ${addAlpha(colors.grass, 0.8)};
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: ${addAlpha(colors.orange, 0.8)};
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: ${addAlpha(colors.red, 0.8)};
  }

  .token.regex,
  .token.important {
    color: ${addAlpha(colors.turqoise, 0.8)};
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
  css([
    cssReset,
    documentSetup(colors),
    elementBase(colors),
    syntaxHighlighting(colors),
  ]);

export default globalStyle;
