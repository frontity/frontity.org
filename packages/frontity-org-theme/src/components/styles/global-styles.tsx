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
`;

const customStyles = css`
  .has-polygon-background {
    clip-path: polygon(0 0, 100% 36px, 100% 100%, 0 calc(100% - 72px));
  }
`;

const globalStyle = (colors: FrontityOrg["state"]["theme"]["colors"]) =>
  css([cssReset, documentSetup(colors), elementBase(colors), customStyles]);

export default globalStyle;
