import FrontityOrg from "../../types";

const state: FrontityOrg["state"]["theme"]["newsletter"] = {
  newsletterForm: {
    email: "",
    hasAgreed: false,
  },
  afterNewsletter: {
    name: "",
    questions: {
      "wp-level": {
        label: "Level of expertise in WordPress:",
        options: [
          {
            label: "No idea",
            value: "none",
          },
          {
            label: "Basic knowledge",
            value: "basic",
          },
          {
            label: "Intermediate knowledge",
            value: "intermediate",
          },
          {
            label: "WP ninja!",
            value: "expert",
          },
        ],
      },
      "react-level": {
        label: "Level of expertise in React:",
        options: [
          {
            label: "React what?",
            value: "none",
          },
          {
            label: "Basic knowledge",
            value: "basic",
          },
          {
            label: "Intermediate knowledge",
            value: "intermediate",
          },
          {
            label: "React ninja!",
            value: "expert",
          },
        ],
      },
      "wp-theme-built-with-js": {
        label: "Have you built a WP theme in React, Vue or Angular?",
        options: [
          {
            label: "Yes",
            value: "yes",
          },
          {
            label: "No",
            value: "no",
          },
        ],
      },
      "use-frontity-for": {
        label: "What would you use Frontity for?",
        options: [
          {
            label: "Hobby project",
            value: "hobby",
          },
          {
            label: "Personal for-profit project",
            value: "personal",
          },
          {
            label: "Freelance projects",
            value: "freelance",
          },
          {
            label: "Development agency projects",
            value: "dev-agency",
          },
          {
            label: "My company’s projects",
            value: "company",
          },
        ],
      },
      "website-type": {
        label: "On what type of website?",
        options: [
          {
            label: "Blog or news site",
            value: "blog-news",
          },
          {
            label: "eCommerce",
            value: "ecommerce",
          },
          {
            label: "Corporate",
            value: "corporate",
          },
          {
            label: "Classifieds",
            value: "classifieds",
          },
          {
            label: "Other",
            value: "other",
          },
        ],
      },
      "looking-to-improve": {
        label: "What are you looking to improve?",
        options: [
          {
            label: "Performance",
            value: "performance",
          },
          {
            label: "UX / UI",
            value: "ux-ui",
          },

          {
            label: "SEO",
            value: "seo",
          },
          {
            label: "PWA",
            value: "pwa",
          },
          {
            label: "I just want to test 😊",
            value: "just-for-fun",
          },
        ],
      },
      "where-to-use-frontity": {
        label: "Where would you like to use Frontity?",
        options: [
          {
            label: "A new project ",
            value: "new-project",
          },
          {
            label: "An existing project",
            value: "existing-project",
          },
        ],
      },
    },
    answers: {},
  },
  sending: {
    newsletterForm: false,
    afterNewsletter: false,
  },
  sent: {
    newsletterForm: false,
    afterNewsletter: false,
  },
};

export default state;
