module.exports = {
  title: 'Hooks Arsenal',
  tagline: 'An arsenal of React Hooks... aka, a React Hooks library',
  url: 'https://hooks-arsenal.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'JamesSingleton', // Usually your GitHub org/user name.
  projectName: 'hooks-arsenal', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Hooks Arsenal',
      logo: {
        alt: 'Hooks Arsenal logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/overview',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/JamesSingleton/hooks-arsenal',
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
              label: 'Getting Started',
              to: 'docs/overview',
            },
            {
              label: 'Hooks',
              to: 'docs/hooks/useDarkMode',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/Design__Pattern',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/JamesSingleton/hooks-arsenal',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} James Singleton.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/JamesSingleton/hooks-arsenal/edit/main/hooks-arsenal-docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
