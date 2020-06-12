import "./prism";
// load the polyfill for `intersection-observer`
import "intersection-observer";

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
import { flowButton } from "./processors/frontity-flow-button";
import { flowButtons } from "./processors/frontity-flow-buttons";
import { flowItem } from "./processors/frontity-flow-item";
import { flowItems } from "./processors/frontity-flow-items";
import { headlessFlow } from "./processors/headless-flow";
// import { heroBlogImage } from "./processors/hero-blog-image";
// import { homepageHeroAnimation } from "./processors/homepage-hero";
import { fastSection } from "./processors/homepage/frontity-fast";
import { needInspirationSection } from "./processors/homepage/need-inspiration";
import { showcasesGallery } from "./processors/homepage/showcases-gallery";
import { horizontalSeparator } from "./processors/horizontal-separator";
import { imageFrame } from "./processors/image-frame";
import { lazyVideo } from "./processors/lazy-video";
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
import { addTweet } from "./processors/tweets/add-tweet";
import { deleteTwitterScript } from "./processors/tweets/delete-script";
// import { typingProcessor } from "./processors/typingProcessor";
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
        showcasesGallery,
        needInspirationSection,
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
        headlessFlow,
        // homepageHeroAnimation,
        // typingProcessor,
        // heroBlogImage,
        addTweet,
        deleteTwitterScript,
        lazyVideo,
      ],
    },
  },
};

export default frontityOrg;
