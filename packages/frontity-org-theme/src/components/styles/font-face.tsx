import { css, Global } from "frontity";
import React from "react";

import IBMPlexSansRegular from "../../fonts/IBMPlexSans-Regular.woff2";
import IBMPlexSansSemiBold from "../../fonts/IBMPlexSans-SemiBold.woff2";
import poppinsSemiBold from "../../fonts/Poppins-SemiBold.woff2";

const FontFace: React.FC = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Poppins";
        src: url(${IBMPlexSansSemiBold});
        font-weight: 600;
        font-display: swap;
        font-style: normal;
      }
      @font-face {
        font-family: "IBMPlexSans";
        src: url(${IBMPlexSansRegular});
        font-weight: 500;
        font-display: swap;
        font-style: normal;
      }
      @font-face {
        font-family: "IBMPlexSans";
        src: url(${IBMPlexSansSemiBold});
        font-weight: 600;
        font-display: swap;
        font-style: normal;
      }
    `}
  />
);

export default FontFace;
