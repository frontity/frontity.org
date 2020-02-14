import Theme from "./components";

const websiteTheme = {
  name: "website-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      colors: {
        frontity: "#1f38c5",
        primary: {
          100: rgba(15, 28, 100, 1),
          80: rgba(15, 28, 100, 0.8),
          60: rgba(15, 28, 100, 0.6),
          40: rgba(15, 28, 100, 0.4)
        },
        voidBlu: "#0c112b",
        grass: "#82c315",
        wall: "#f6f6f9",
        purple: "#1f38c5",
        orange: "#f4c053",
        red: "#f76d64",
        turqoise: "#6ac8c9",
        lightGreen: "#1f38c5"
      }
    }
  },
  actions: {
    theme: {}
  }
};

export default websiteTheme;
