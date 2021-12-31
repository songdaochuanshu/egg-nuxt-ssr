'use strict';
const path = require('path');
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "二次猿博客",
    meta: [
      { charset: "utf-8" },
      { charset: 'utf-8' },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "keywords",
        content:
          "博客,松岛川树,二次猿,开源,nuxt,egg,md,js,",
      },
      { name: "robots", content: "all" },
      { name: "author", content: "松岛川树" },
      { name: "copyright", content: "松岛川树" },
      { name: "renderer", content: "webkit" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/public/image/favicon.ico' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    './styles/main.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/antd-ui', ssr: false },
    { src: '@/plugins/http', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    "@nuxtjs/proxy",
  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,// 开启打包css文件
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'ant-design-vue',
            libraryDirectory: 'es',
            style: true,
          }
        ]
      ]
    },
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.less$/,
        use: [{
          loader: 'less-loader',
          options: {
            lessOptions: {
              modifyVars: {
                'primary-color': '#8abcd1', // 自定义 ant-design-vue 主题颜色
                'link-color': '#8abcd1',
                'border-radius-base': '2px'
              },
              javascriptEnabled: true
            }
          }
        }]
      })

    },
    transpile: [/ant-design-vue/],
  },
  srcDir: path.join(__dirname),
  rootDir: path.dirname(__dirname, '../'),
};
