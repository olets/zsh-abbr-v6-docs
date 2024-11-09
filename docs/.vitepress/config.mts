import { defineConfig } from "vitepress";
import markdownItFootnote from "markdown-it-footnote";

const description = "The zsh manager for auto-expanding abbreviations";
const siteTitle = "zsh-abbr";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: `${siteTitle} v6`,
  description: description,
  // https://vitepress.dev/reference/site-config#titletemplate
  titleTemplate: `:title :: ${siteTitle}`, // to change delimiter from default pipe to play nice with Fathom event id format. see also homepage frontmatter
  // https://vitepress.dev/reference/default-theme-last-updated
  lastUpdated: true,

  head: [
    // favicon generated by https://realfavicongenerator.net/
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#fefefe",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#ffffff",
      },
    ],

    // social metas
    ["meta", { property: "og:title", content: siteTitle }],
    [
      "meta",
      {
        property: "og:description",
        content: description,
      },
    ],
    [
      "meta",
      {
        property: "og:url",
        content: "https://zsh-abbr.olets.dev/",
      },
    ],
    ["meta", { property: "og:site_name", content: siteTitle }],
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://zsh-abbr.olets.dev/images/zsh-abbr.png",
      },
    ],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    ["meta", { name: "twitter:title", content: siteTitle }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:description",
        content: description,
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://zsh-abbr.olets.dev/images/zsh-abbr.png",
      },
    ],

    // Analytics
    [
      "script",
      {
        src: "https://cdn.usefathom.com/script.js",
        "data-site": "KVOUORES",
        defer: "true",
      },
    ],
    [
      "script",
      {
        src: "/js/analytics.js",
      },
    ],

    // Font
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    ],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "true",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
        rel: "stylesheet",
      },
    ],
  ],

  markdown: {
    externalLinks: {
      class: "vp-external-link-icon",
      target: "_self",
    },
    theme: {
      light: "github-light-high-contrast",
      dark: "github-dark-high-contrast",
    },
    // add more plugins
    // https://vitepress.dev/guide/markdown#advanced-configuration
    config: (md) => {
      md.use(markdownItFootnote);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    editLink: {
      pattern: "https://github.com/olets/zsh-abbr-v6-docs/edit/main/docs/:path",
    },

    // logo: {
    //   alt: "tailwindcss-fluid-font-size Logo",
    //   src: "/icon.svg",
    // },

    nav: [
      {
        text: "v6",
        items: [
          {
            text: "Major version",
            link: "",
          },
          {
            text: "v6",
            link: "/",
            target: "_self",
          },
          {
            text: "v5",
            link: "https://v5.zsh-abbr.olets.dev",
            target: "_self",
          },
          {
            text: "v4",
            link: "https://v4.zsh-abbr.olets.dev",
            target: "_self",
          },
        ],
      },
      {
        text: "Source, Changelog, License",
        link: "https://github.com/olets/zsh-abbr/",
        target: "_self",
      },
      {
        text: "olets.dev",
        link: "https://olets.dev",
        target: "_self",
      },
    ],

    search: {
      provider: "local",
    },

    sidebar: [
      {
        text: "Overview",
        collapsed: false,
        items: [
          {
            text: "Introduction",
            link: "/",
          },
          {
            text: "Installation",
            link: "/installation",
          },
          {
            text: "What's new?",
            link: "/whats-new",
          },
          {
            text: "Features",
            collapsed: false,
            items: [
              {
                text: "Abbreviation expansion",
                link: "/abbreviation-expansion",
              },
              {
                text: "Cursor placement",
                link: "/cursor-placement",
              },
              {
                text: "History",
                link: "/history",
              },
              {
                text: "Prefixes",
                link: "/prefixes",
              },
              {
                text: "Reminders",
                link: "/reminders",
              },
            ],
          },
        ],
      },
      {
        text: "Manual",
        collapsed: false,
        items: [
          {
            text: "Scopes",
            link: "/scopes",
          },
          {
            text: "Types",
            link: "/types",
          },
          {
            text: "Commands",
            link: "/commands",
          },
          {
            text: "Advanced",
            collapsed: false,
            items: [
              {
                text: "Configuration variables",
                link: "/configuration-variables",
              },
              {
                text: "Exported variables",
                link: "/exported-variables",
              },
              {
                text: "Integrations",
                link: "/integrations",
              },
              {
                text: "Storage and manual editing",
                link: "/storage-and-manual-editing",
              },
              {
                text: "Widgets and key bindings",
                link: "/widgets-and-key-bindings",
              },
              {
                text: "Migrating between versions",
                link: "/migrating-between-versions",
              },
              {
                text: "Uninstalling",
                link: "/uninstalling",
              },
              {
                text: "Performance",
                link: "/performance",
              },
            ],
          },
        ],
      },
      {
        text: "Contribute",
        collapsed: false,
        items: [
          {
            text: "Contributing",
            link: "/contributing.html",
          },
          {
            text: "Sponsoring",
            link: "/contributing.html#sponsoring",
          },
          {
            text: "Community",
            link: "/community.md",
          },
        ],
      },
    ],

    socialLinks: [],
  },
});
