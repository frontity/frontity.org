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
      beforeSSR: ({ state, actions }) => async ({ ctx }) => {
        const data = await Promise.all(
          state.theme.templates.map(slug =>
            actions.source.fetch(`/wp_template_part/${slug}`)
          )
        );
        console.log("ready", data);
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
        boxShadow,
        borderRadius,
        dropdown
      ]
    },
    source: {
      handlers: []
    }
  }
};

frontityOrg.libraries.source.handlers.push({
  name: "template-parts",
  priority: 10,
  pattern: "/wp_template_part/:slug",
  func: async ({ route, params, state, libraries, force }) => {
    // 1. get product
    const response = await libraries.source.api.get({
      endpoint: "wp_template_part",
      params: { slug: params.slug }
    });

    // 2. add product to state
    const [template] = await libraries.source.populate({
      response,
      state,
      force
    });

    console.log(template);
  }
});

export default frontityOrg;
