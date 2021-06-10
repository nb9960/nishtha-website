module.exports = {
  siteName: 'Nishtha Bodani',
  siteUrl: 'https://nishthab.tech',
  plugins: [
    {
      use: 'gridsome-plugin-bundle-analyzer',
      options: {
        onlyProduction: true, // only production bundle will be analyzed by default
        analyzerOptions: {} // see https://github.com/webpack-contrib/webpack-bundle-analyzer
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/project/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
            ['gridsome-plugin-remark-shiki', { theme: 'nord', skipInline: true }]
          ]
        },
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-179961050-1'
      }
    }
  ],
  templates: {
    Post: '/project/:slug',
    // add the tags template
    Tag: '/tag/:id/'
  },
  transformers: {
    // plugin for code highlighting.
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        'gridsome-plugin-remark-prismjs-all'
      ]
    }
  },
  chainWebpack: config => {
    config.mode('development'),
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
  },
  devtool: 'inline-source-map',
}
