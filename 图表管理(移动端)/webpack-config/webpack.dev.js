const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const proxy = require('./proxy')
const envConfig = require('./env.config')
let serverPrefixPath = envConfig.serverPrefixPath

const config = {
  mode: 'development',
  plugins: [
    new ESLintPlugin({
      // 默认配置，请点击上方官网链接查看
      fix: true,
      extensions: ['js', 'vue'],
      exclude: [
        path.resolve(__dirname, '../node_modules')
      ],
      formatter: require('eslint-friendly-formatter')
    })
  ],
  watch: false,
  watchOptions: {
    aggregateTimeout: 300,
    ignored: /node_modules/,
    poll: 1000
  },
  module: {
    rules: []
  },
  devServer: {
    // 这里可以引用多个文件
    proxy: {
      ...proxy
    },
    // host: 'localhost',
    host: '172.16.61.88',
    port: '8060',
    // historyApiFallback: true,
    historyApiFallback: {
      rewrites: [
        { from: /^(\/.*)?$/, to: serverPrefixPath + '/index.html' }
      ]
    },
    open: true,
    compress: false,
    hot: true
  }
}
module.exports = config
