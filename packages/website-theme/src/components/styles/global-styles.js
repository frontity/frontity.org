import { css } from "frontity";

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

const documentSetup = colors => css`
  body {
    background: ${colors.wall};
    font-family: "IBMPlexSans";
    color: ${colors.primary[80]};
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
    color: ${colors.primary[100]};
  }
  img {
    max-width: 100%;
  }
`;

const elementBase = colors => css`
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
    color: ${colors.primary[40]};
    text-transform: uppercase;
  }
`;

const globalStyle = colors =>
  css([cssReset, documentSetup(colors), elementBase(colors)]);

export default globalStyle;
