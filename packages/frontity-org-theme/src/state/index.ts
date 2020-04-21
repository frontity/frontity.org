import FrontityOrg from "../../types";
import newsletter from "./newsletter";

const state: FrontityOrg["state"]["theme"] = {
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

  // slugs for the WP templates that are fetched in BeforeSSR
  templates: ["fixed-header", "header", "footer", "newsletter"],

  // Used in the frontity-flow section of the homepage
  flowSectionActiveTab: 1,

  isFixedHeaderVisible: false,

  // This is the height of the <Header /> element at the top of the page.
  // We need this in order to add padding-top to the Hero section accordingly
  headerHeight: 125,

  // List of z-index values used in the site
  zIndices: {
    navBar: 100,
    flowSectionButtons: 10,
  },
  newsletter,
};

export default state;
