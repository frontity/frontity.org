const settings = [
  {
    name: "frontity-org",
    match: ["(\\?|&)post_type=\\w+"],
    state: {
      frontity: {
        url: "https://inf-scroll-frontity-org.pantheonsite.io",
        title: "Frontity",
        description: "The React framework for WordPress",
      },
      source: {
        url: "https://inf-scroll-frontity-org.pantheonsite.io",
      },
    },
    packages: [
      {
        name: "@frontity/frontity-org-theme",
        state: {
          theme: {
            autoPrefetch: "in-view",
          },
        },
      },
      {
        name: "@frontity/wp-source",
        state: {
          source: {
            postTypes: [
              {
                type: "/blog/wp_template_part",
                endpoint: "template-parts",
              },
              {
                type: "partner",
                endpoint: "partner",
              },
            ],
            homepage: "/homepage/",
            postsPage: "/blog/",
          },
        },
      },
      "@frontity/tiny-router",
      "@frontity/html2react",
      {
        name: "@frontity/yoast",
        state: {
          yoast: {
            renderTags: "server",
          },
        },
      },
      {
        name: "@frontity/google-tag-manager-analytics",
        state: {
          googleTagManagerAnalytics: {
            containerId: "GTM-NDGDFKR",
          },
        },
      },
      "frontity-contact-form-7",
    ],
  },
  {
    name: "blog-frontity",
    match: ["https?:\\/\\/[^/]+\\/blog([^-\\w]|$)", "(\\?|&)p=\\d+"],
    state: {
      frontity: {
        url: "https://inf-scroll-frontity-org.pantheonsite.io",
        title: "Frontity Blog",
        description: "The React framework for WordPress",
      },
      source: {
        url: "https://inf-scroll-frontity-org.pantheonsite.io",
      },
    },
    packages: [
      {
        name: "@frontity/twentytwenty-theme",
        state: {
          theme: {
            menu: [
              ["Frontity", "https://frontity.org"],
              ["Community", "https://community.frontity.org"],
              ["Docs", "https://docs.frontity.org"],
              ["GitHub", "https://github.com/frontity/frontity"],
              ["Twitter", "https://twitter.com/frontity"],
            ],
            colors: {
              primary: "#0f1c64",
              headerBg: "#ffffff",
              footerBg: "#ffffff",
              bodyBg: "#f2f3fc",
            },
            // Whether to show the search button in page header
            showSearchInHeader: true,
            // Whether to show all post content or only excerpt (summary) in archive view
            showAllContentOnArchive: false,
            // Settings for the featured media (image or video)
            featuredMedia: {
              // Whether to show it on archive view
              showOnArchive: true,
              // Whether to show it on post
              showOnPost: true,
            },
            // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
            autoPreFetch: "hover",
            /**
             * At the moment, we only include the ascii characters of Inter font.
             * Values can be "us-ascii" | "latin" | "all"
             */
            fontSets: "us-ascii",
          },
        },
      },
      {
        name: "@frontity/wp-source",
        state: {
          source: {
            homepage: "/homepage/",
            postsPage: "/blog",
            categoryBase: "/blog/category",
            tagBase: "/blog/tag",
            authorBase: "/blog/author",
          },
        },
      },
      "@frontity/tiny-router",
      "@frontity/html2react",
      {
        name: "@frontity/yoast",
        state: {
          yoast: {
            renderTags: "server",
          },
        },
      },
      {
        name: "@frontity/google-tag-manager-analytics",
        state: {
          googleTagManagerAnalytics: {
            containerId: "GTM-NDGDFKR",
          },
        },
      },
    ],
  },
];
export default settings;
