// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`




module.exports = {
  siteName: 'Erdem Inanc',
  siteUrl: 'https://erdeminanc.com',
  plugins: [
    {
      use: 'gridsome-plugin-bundle-analyzer',
      options: {
        onlyProduction: true, // only production bundle will be analyzed by default
        analyzerOptions: {}, // see https://github.com/webpack-contrib/webpack-bundle-analyzer
      },
    },
    {
    use: "@gridsome/source-filesystem",
    options: {
      path: "project/**/*.md",
      typeName: "Post",
      remark:{}
    }
  },
  {
    use: '@gridsome/plugin-google-analytics',
    options: {
      id: 'UA-180190567-1'
    }
  }
],
    transformers:{
      //plugin for code highlighting.
      remark: {
        externalLinksTarget: '_blank',
        externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        anchorClassName: 'icon icon-link',
        plugins: [
          'gridsome-plugin-remark-prismjs-all',
        ]
      }
    },
    chainWebpack: config => {
      config.mode('development'),
      config.module
        .rule("pdf")
        .test(/\.pdf$/)
        .use("file-loader")
        .loader("file-loader")
},
  devtool: 'inline-source-map'

}
