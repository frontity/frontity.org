import "./prism";

import iframe from "@frontity/html2react/processors/iframe";

import FrontityOrg from "../types";
import Theme from "./components";
import { backgroundColor } from "./processors/background-color";
import { borderRadius } from "./processors/border-radius";
import { borders } from "./processors/borders";
import { boxShadow } from "./processors/box-shadow";
import { checklists } from "./processors/checklists";
import { dropdown } from "./processors/dropdown";
import { flowButton } from "./processors/frontity-flow-button";
import { flowButtons } from "./processors/frontity-flow-buttons";
import { flowItem } from "./processors/frontity-flow-item";
import { flowItems } from "./processors/frontity-flow-items";
import { horizontalSeparator } from "./processors/horizontal-separator";
import { imageFrame } from "./processors/image-frame";
import { links } from "./processors/links-buttons";
import { mobileDesktop } from "./processors/mobile-desktop";
import { paragraph } from "./processors/paragraph";
import { polygonBackground } from "./processors/polygon-background";
import { scrollingSection } from "./processors/scrolling-section";
import { section } from "./processors/section";
import { specialIcons } from "./processors/special-icons";
import { terminal } from "./processors/terminal";
import { textColor } from "./processors/text-color";

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
      tabNumber: 1,
    },
  },
  actions: {
    theme: {
      beforeSSR: ({ state, actions }) => async () => {
        await Promise.all(
          state.theme.templates.map((slug) =>
            actions.source.fetch(`/wp_template_part/${slug}`)
          )
        );
      },
      setTabNumber: ({ state }) => (tabNumber) => {
        state.theme.tabNumber = tabNumber;
      },
    },
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
        boxShadow,
        checklists,
        dropdown,
        horizontalSeparator,
        links,
        scrollingSection,
        section,
        specialIcons,
        flowButtons,
        flowButton,
        flowItems,
        flowItem,
      ],
    },
  },
};

export default frontityOrg;
