const settings = {
  name: "frontity-org",
  state: {
    frontity: {
      url: "https://test.frontity.io",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development"
    }
  },
  packages: [
    {
      name: "website-theme"
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://wp.frontity.org/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
