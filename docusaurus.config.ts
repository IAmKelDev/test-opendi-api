// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenDI - JSON Schema (DRAFT)',
  tagline: 'Early working draft of API Specification and Schemas for the upcoming OpenDI standards.',
  favicon: 'img/opendi-icon-small.png',

  // Set the production url of your site here
  url: 'http://iamkeldev.github.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/test-opendi-api/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'IAmKelDev', // Usually your GitHub org/user name.
  projectName: 'test-opendi-api', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Schema-plugin allows use of @theme/JSONSchemaEditor or @theme/JSONSchemaViewer
  // OpenAPI-docs allows OpenAPI plugin to use its theming
  themes: ["docusaurus-json-schema-plugin", "docusaurus-theme-openapi-docs"],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          docItemComponent: "@theme/ApiItem",

          //Set up "Edit this page" option at the bottom of each page
          //Available params given here: https://docusaurus.io/docs/next/api/plugins/@docusaurus/plugin-content-docs#EditUrlFunction
          editUrl: ({version, versionDocsDirPath, docPath}) => {
            if (version !== 'current') //Only allow page editing when on the "Next" (dev) version
            {
              return undefined;
            }
            return "https://github.com/opendi-org/json-schema/tree/dev/" + versionDocsDirPath + "/" + docPath;
          },

          routeBasePath: '/'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false
      }),
    ],
  ],

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://www.clarity.ms",
      },
    },
    {
      tagName: "script",
      attributes: {
        type: "text/javascript"
      },
      innerHTML: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "oikkxw5xzl");`,
    },
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "openapi", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          OpenDIApi: {
            specPath: "docs/api-source/api.json",
            outputDir: "docs/api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OpenDI',
        logo: {
          alt: 'OpenDI Logo',
          src: 'img/opendi-icon.png',
          href: 'https://opendi.org'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'landingSidebar',
            position: 'left',
            label: 'JSON Schema (DRAFT)',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            'aria-label': 'GitHub Repo',
            className: 'navbar--github-link',
            href: 'https://github.com/opendi-org/json-schema',
            position: 'right',
          },
          {
            'aria-label': 'Discord Invite',
            className: 'navbar--discord-link',
            href: 'https://discord.gg/FtAX3JStJz',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Home',
                to: 'http://opendi.org',
              },
              {
                label: 'Roles and User Stories',
                href: 'http://roles-user-stories.opendi.org'
              },
              {
                label: 'JSON Schema',
                href: 'http://json-schema.opendi.org'
              },
            ],
          },
          {
            title: 'Get Involved',
            items: [
              {
                label: 'OpenDI Discord',
                href: 'https://discord.gg/FtAX3JStJz',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/opendi-org',
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['json']
      },
    }),
};

export default config;
