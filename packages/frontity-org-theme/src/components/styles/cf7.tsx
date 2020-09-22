import { css } from "frontity";

import FrontityOrg from "../../../types";
import { addAlpha } from "../../utils";

const cf7Styles = (colors: FrontityOrg["state"]["theme"]["colors"]) => css`
  // All inputs
  .wpcf7 input[type="text"],
  .wpcf7 input[type="email"],
  .wpcf7 textarea {
    width: 100%;
    border: 1px solid rgba(12, 17, 43, 0.08);
    border-radius: 8px;
    box-shadow: 0 1px 4px 0 rgba(12, 17, 43, 0.12);
    background: ${colors.white};
    font-size: 16px;
    line-height: 24px;
    color: ${addAlpha(colors.primary, 0.8)};
    &:hover {
      border-color: ${colors.orange};
    }
    &:focus {
      border: 1px solid ${colors.frontity};
      outline: none;
    }
  }
  .wpcf7 input[type="text"],
  .wpcf7 input[type="email"] {
    height: 50px;
    padding: 3px 9px 3px 19px;
  }
  .wpcf7 textarea {
    height: 160px;
    padding: 9px 9px 9px 19px;
  }

  // Labels
  .wpcf7 label {
    text-transform: uppercase;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    color: ${colors.primary};
  }

  // Checkbox
  .wpcf7-acceptance label {
    text-transform: none;
    font-weight: normal;
    color: ${addAlpha(colors.primary, 0.8)};
  }
  .wpcf7-acceptance label > * {
    vertical-align: middle;
  }
  .wpcf7-acceptance label > span {
    margin-left: 8px;
  }

  //Button
  .wpcf7-submit {
    background-color: ${colors.frontity};
    color: ${colors.white};
    line-height: 16px;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 16px;
    border-radius: 8px;
    border: none;

    box-shadow: 0 4px 8px 0 rgba(12, 17, 43, 0.12),
      0 1px 4px 0 rgba(12, 17, 43, 0.16);
    &:hover {
      filter: opacity(0.9);
      cursor: pointer;
    }
  }

  // Separate fields
  .wpcf7-form > p {
    margin-top: 12px;
  }
`;

export default cf7Styles;
