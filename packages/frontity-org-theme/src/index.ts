import FrontityOrg from "../types";
import Theme from "./components";
import {
  backgroundColor,
  textColor,
  specialIcons,
  paragraphs,
  mobileDesktop,
  borders,
  links,
  boxShadow,
  checklists,
  borderRadius,
  dropdown
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
      },
      templates: ["fixed-header", "header", "footer", "newsletter"]
    }
  },
  actions: {
    theme: {
      beforeSSR: ({ state, actions }) => async () => {
        await Promise.all(
          state.theme.templates.map(slug =>
            actions.source.fetch(`/wp_template_part/${slug}`)
          )
        );
      }
    }
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
        ...borders,
        links,
        boxShadow,
        checklists,
        borderRadius,
        dropdown
      ]
    }
  }
};

export default frontityOrg;
