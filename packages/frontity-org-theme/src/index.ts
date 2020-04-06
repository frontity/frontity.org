import iframe from "@frontity/html2react/processors/iframe";

import FrontityOrg from "../types";
import actions from "./actions";
import Theme from "./components";
import { backgroundColor } from "./processors/background-color";
import { borderRadius } from "./processors/border-radius";
import { borders } from "./processors/borders";
import { boxShadow } from "./processors/box-shadow";
import { checklists } from "./processors/checklists";
import { dropdown } from "./processors/dropdown";
import { fastSection } from "./processors/homepage/frontity-fast";
import { horizontalSeparator } from "./processors/horizontal-separator";
import { imageFrame } from "./processors/image-frame";
import { links } from "./processors/links-buttons";
import { mobileDesktop } from "./processors/mobile-desktop";
import { newsletter } from "./processors/newsletter";
import { paragraph } from "./processors/paragraph";
import { polygonBackground } from "./processors/polygon-background";
import { scrollingSection } from "./processors/scrolling-section";
import { section } from "./processors/section";
import { specialIcons } from "./processors/special-icons";
import { terminal } from "./processors/terminal";
import { textColor } from "./processors/text-color";
import { newsletterState } from "./state";

const frontityOrg: FrontityOrg = {
  name: "frontity-org-theme",
  roots: {
    theme: Theme,
  },
  state: {
    theme: {
      colors: {
        frontity: "#1f38c5",
        primary: "#0f1c64",
        voidblu: "#0c112b",
        grass: "#82c315",
        wall: "#f6f6f9",
        purple: "#936af4",
        orange: "#f4c053",
        red: "#f76d64",
        turqoise: "#6ac8c9",
        lightgreen: "#8ACB88",
        white: "#ffffff",
      },
      templates: ["fixed-header", "header", "footer", "newsletter"],
      newsletter: newsletterState,
    },
  },
  actions: {
    theme: actions,
  },
  libraries: {
    html2react: {
      processors: [
        iframe,
        ...paragraph,
        ...mobileDesktop,
        ...borders,
        backgroundColor,
        terminal,
        textColor,
        imageFrame,
        polygonBackground,
        borderRadius,
        newsletter,
        boxShadow,
        checklists,
        fastSection,
        dropdown,
        horizontalSeparator,
        links,
        scrollingSection,
        section,
        specialIcons,
      ],
    },
  },
};

export default frontityOrg;
