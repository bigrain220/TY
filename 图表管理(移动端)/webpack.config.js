const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionPlugin = require('compression-webpack-plugin')
const {
  merge
} = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// package.scripts 设置的  process.env.target = dev || test || prod
const target = process.env.target

// 获取配置文件
const config = require(path.join(__dirname, 'webpack-config/webpack.' + target + '.js'))

// 获取环境配置
const envConfig = require('./webpack-config/env.config')

const getWebpackConfig = function (options = {}) {
  return {
    output: envConfig.output,
    entry: {
      index: path.resolve(__dirname, 'src/main.js')
    },
    plugins: [
      // js 全局变量
      new webpack.DefinePlugin({
        'process.env': envConfig.processEnv
      }),
      // 复制 static 文件夹
      new CopyWebpackPlugin({
        patterns: [{
          from: path.resolve(__dirname, envConfig.assetsPath),
          to: envConfig.assetsPath,
          globOptions: {
            dot: false
          },
          noErrorOnMissing: true
        }]
      }),
      // 页面
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true,
        // 在index.html中获取属性： <%= htmlWebpackPlugin.options.baseURL %>
        baseURL: envConfig.baseURL
      }),
      // 提取css文件
      new MiniCssExtractPlugin({
        filename: target !== 'dev' ? envConfig.assetsPath + '/css/[name].[contenthash:8].css' : '[name].css'
      }),
      // 全局引用，键名表示对该包的引用， 值为包名（需要安装该包）; 例如 echarts: 'echarts'
      new webpack.ProvidePlugin({
        // echarts: 'echarts'
        Vue: ['vue', 'default']
      }),
      new VueLoaderPlugin()
    ],
    // externals 排除指定的包名被打包，需要在入口的html(index.html)文件中手动引入脚本库;
    // 例如排除echarts包被打包 import echarts from 'echarts'; 需要配置 echarts: 'echarts', 键名(echarts)为包名, 值('echarts')为脚本暴露的全局变量
    externals: {
      // echarts: 'echarts'
    },
    module: {
      rules: [{
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', {
            loader: 'sass-loader',
            options: {
              // 设置sass变量 '$color:blue;' (多个变量用 ‘;’ 隔开)
              additionalData: options.scssData || ''
            }
          }]
        },
        {
          test: /\.less$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', {
            loader: 'less-loader',
            options: {
              // 设置less变量 '@color:green;' (多个变量用 ‘;’ 隔开)
              additionalData: options.lessData || ''
            }
          }]
        },
        {
          test: /\.js$/i,
          use: [{
            loader: 'babel-loader',
            options: {}
          }],
          exclude: /(node_modules|bower_components)/,
          include: [
            path.join(__dirname, 'src')
          ]
        },
        // 字体
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'file-loader',
          options: {
            limit: 1024 * 10,
            name: envConfig.assetsPath + '/fonts/[name].[hash:8].[ext]'
          }
        },
        // 音频
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            esModule: false,
            limit: 1024 * 10,
            name: envConfig.assetsPath + '/media/[name].[hash:8].[ext]'
          }
        },
        // 图片
        {
          test: /\.(png|jpe?g|gif)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            esModule: false,
            limit: 1024 * 10,
            name: envConfig.assetsPath + '/img/[name].[hash:8].[ext]'
          }
        },
        {
          test: /\.svg(\?.*)?$/,
          loader: 'file-loader',
          options: {
            esModule: false,
            name: envConfig.assetsPath + '/svg/[name].[hash:8].[ext]'
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, 'src')
      }
    },
    devtool: envConfig.sourceMap ? 'cheap-source-map' : false,
    performance: {
        hints: 'warning',
        // 入口起点的最大体积
        maxEntrypointSize: 1024 * 1024 * 10 * 10,
        // 生成文件的最大体积
        maxAssetSize: 1024 * 1024 * 10 * 10,
        // 只给出 js 文件的性能提示
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith('.js')
        }
    }
  }
}

// 是否添加 gz 文件
if (envConfig.gzip) {
  config.plugins.push(new CompressionPlugin({
    test: /\.(js|css)/,
    threshold: 1024 * 10
  }))
}

// 是否开启webpack的可视化资源分析工具
if (envConfig.bundleAnalyzer) config.plugins.push(new BundleAnalyzerPlugin())

// 获取变量文件
const stylePromise = require('./style-variables')

// webpack 配置输出
module.exports = new Promise(resolve => {
  stylePromise.then(styleData => {
    resolve(merge(getWebpackConfig({
      ...styleData
    }), config))
  })
})
