import { css, Global } from "frontity";
import React from "react";

import IBMPlexSansRegular from "../../fonts/IBMPlexSans-Regular.ttf";
import poppinsSemiBold from "../../fonts/Poppins-SemiBold.ttf";

const FontFace: React.FC = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Poppins";
        src: url(${poppinsSemiBold});
        font-weight: 600;
        font-display: block;
        font-style: normal;
      }
      @font-face {
        font-family: "IBMPlexSans";
        src: url(${IBMPlexSansRegular});
        font-weight: 500;
        font-display: block;
        font-style: normal;
      }
    `}
  />
);

export default FontFace;
