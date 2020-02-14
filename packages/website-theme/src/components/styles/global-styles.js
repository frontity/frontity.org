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
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins";
  }
`;

const globalStyle = colors => css([cssReset, documentSetup(colors)]);

export default globalStyle;
