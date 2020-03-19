import FrontityOrg from "../types";
import Theme from "./components";
import {
  backgroundColor,
  textColor,
  specialIcons,
  paragraphs,
  mobileDesktop,
  borders,
  boxShadow,
  borderRadius,
  dropdown,
  imageFrame
} from "./processors";

const frontityOrg: FrontityOrg = {
  name: "frontity-org-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      colors: {
        frontity: "#1f38c5",
        primary: "#0f1c64",
        voidblu: "#0c112b",
        grass: "#82c315",
        wall: "#f6f6f9",
        purple: "#1f38c5",
        orange: "#f4c053",
        red: "#f76d64",
        turqoise: "#6ac8c9",
        lightgreen: "#8ACB88",
        white: "#ffffff"
      }
    }
  },
  actions: {
    theme: {}
  },
  libraries: {
    html2react: {
      processors: [
        ...paragraphs,
        ...mobileDesktop,
        ...borders,
        backgroundColor,
        textColor,
        specialIcons,
        imageFrame,
        boxShadow,
        borderRadius,
        dropdown
      ]
    }
  }
};

export default frontityOrg;
