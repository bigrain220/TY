const path = require('path')
// package.scripts 设置的  process.env.target = dev || test || prod
const target = process.env.target
// outputPath 项目构建输出目录
const outputPath = 'dist'
// assetsPath 项目构建后用于放置 file-loader 生成的文件，子文件夹有 css js ...
const assetsPath = 'static'

// DefinePlugin, 配置js的 process.env 环境变量
// 在项目js文件中通过 process.env 对象来获相应的值 (process.env.NODE_ENV, process.env.publicPathCDNURL, process.env.serverPrefixPath)

/*
  server
    用于判断当前的编译环境，开发、测试、生产
*/
/*
  publicPathCDNURL
    1. 当您希望 output.publicPath 地址为 CDN 地址时: 请设置 publicPathCDNURL: 'http://*', 否则 publicPathCDNURL: '""'（请不要设置为 '"/"'）,
    2. publicPathCDNURL 为空时: output.publicPath = serverPrefixPath || '/'
    3. dev 开发环境中环境中 publicPathCDNURL 无需设置
*/

/*
  serverPrefixPath
    1. 当nginx服务器有添加前缀时（例如一个nginx 80 端口需要部署多个前端项目就需要用前缀区分），需要以 / 开头 (如： /pathname)
    2. 如果nginx没有转发前缀请设置为空 serverPrefixPath: '""' （请不要设置为 '"/"'）
    3. serverPrefixPath 会用于页面路由注册（当作路径前缀部分添加）、错误路径重定向
    4. 当 serverPrefixPath 为空时，output.publicPath 设置为 '/'
*/
/*
  在 main.js 中全局注入了 baseURL 属性，方便子组件使用（设置static静态资源路径前缀）
  provide: {
    baseURL: process.env.publicPathCDNURL || process.env.serverPrefixPath
  }
*/
const processEnv = {
  dev: {
    NODE_ENV: '"development"',
    server: '"dev"',
    publicPathCDNURL: '""', // 开发环境中 publicPathCDNURL 无需设置
    serverPrefixPath: '""'
  },
  test: {
    NODE_ENV: '"production"',
    server: '"test"',
    publicPathCDNURL: '""',
    serverPrefixPath: '""'
  },
  prod: {
    NODE_ENV: '"production"',
    server: '"prod"',
    publicPathCDNURL: '""',
    serverPrefixPath: '""'
  }
}

// 在 webpack 配置文件中（webpack.DefinePlugin 为生效）无法使用 process.env 环境变量所以需要转换
const publicPathCDNURL = processEnv[target].publicPathCDNURL.replace(/['"]/g, '')
const serverPrefixPath = processEnv[target].serverPrefixPath.replace(/['"]/g, '')
const publicPath = publicPathCDNURL || serverPrefixPath + '/'
const baseURL = publicPathCDNURL || serverPrefixPath

// source-map
const sourceMap = {
  dev: true,
  test: false,
  prod: false
}

// output 配置
const output = {
  dev: {
    filename: '[name].js',
    publicPath: publicPath
  },
  test: {
    path: path.resolve(__dirname, '..', outputPath),
    filename: assetsPath + '/js/[name].[chunkhash:8].js',
    chunkFilename: assetsPath + '/js/[id].[chunkhash:8].js',
    publicPath: publicPath
  },
  prod: {
    path: path.resolve(__dirname, '..', outputPath),
    filename: assetsPath + '/js/[name].[chunkhash:8].js',
    chunkFilename: assetsPath + '/js/[id].[chunkhash:8].js',
    publicPath: publicPath
  }
}

// 是否添加 gz 文件
const gzip = {
  test: true,
  prod: true
}

// 是否开启webpack的可视化资源分析工具webpack-bundle-analyzer的使用
const bundleAnalyzer = {
  test: false,
  prod: false
}

// 输出配置
module.exports = {
  outputPath: outputPath,
  assetsPath: assetsPath,
  serverPrefixPath: serverPrefixPath,
  baseURL: baseURL,
  processEnv: processEnv[target],
  output: output[target],
  sourceMap: sourceMap[target],
  bundleAnalyzer: bundleAnalyzer[target],
  gzip: gzip[target]
}
