// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ThrivingPark',
  tagline: 'Always on the Move',
  url: 'https://www.thrivingpark.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'ThrivingPark', 
  projectName: 'ThrivingPark.com', 

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/wijohnst/thriving-park-documentation',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/wijohnst/thriving-park-documentation',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Thriving Park',
        logo: {
          alt: 'Thriving Park Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/wijohnst/thriving-park-documentation',
            label: 'GitHub',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Join our Slack',
                href: 'https://join.slack.com/t/thrivingparkcom/shared_invite/zt-15o1eym03-gLeAh5_LxCKt8dLTm0_q~g',
              },
            ],
          },
          {
            title: 'Repositories',
            items: [
              {
                label: 'GitHub - FE Repo',
                href: 'https://github.com/wijohnst/thriving-park',
              },
							{
								label: 'Github - BE Repo',
								href: 'https://github.com/wijohnst/tp-express-backend',
							},
							{
								label: 'Github - Doc Site Repo',
								href: 'https://github.com/wijohnst/thriving-park-documentation',
							}
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ThrivingPark.com Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
