const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// 获取环境配置
const envConfig = require('./env.config')
module.exports = {
  mode: 'production',
  plugins: [
    // 删除 dist 文件夹
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.resolve(__dirname, '..', envConfig.outputPath, envConfig.assetsPath)
      ]
    })
  ]
}
