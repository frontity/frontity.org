import FrontityOrg from "../types";
import Theme from "./components";
import { backgroundColor } from "./processors/background-color";
import { borderRadius } from "./processors/border-radius";
import { borders } from "./processors/borders";
import { boxShadow } from "./processors/box-shadow";
import { dropdown } from "./processors/dropdown";
import { mobileDesktop } from "./processors/mobile-desktop";
import { paragraph } from "./processors/paragraph";
import { specialIcons } from "./processors/special-icons";
import { textColor } from "./processors/text-color";

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
        ...paragraph,
        ...mobileDesktop,
        ...borders,
        backgroundColor,
        textColor,
        specialIcons,
        boxShadow,
        borderRadius,
        dropdown
      ]
    }
  }
};

export default frontityOrg;
