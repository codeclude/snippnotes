module.exports = {
  pathPrefix: "/snippnotes",
  siteMetadata: {
    title: 'snippnotes',
    description: "A Journal for your daily basis code snippets",
    author: 'korczynsk1',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        basePath: '/',
        showThemeInfo: true,
        showDescriptionInSidebar: true,
      },
    },
  ],
}
