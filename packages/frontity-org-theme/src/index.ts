import "./prism";

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
import state from "./state";

const frontityOrg: FrontityOrg = {
  name: "frontity-org-theme",
  roots: {
    theme: Theme,
  },
  state: {
    theme: state,
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
