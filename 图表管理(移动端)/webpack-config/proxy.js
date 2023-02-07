// 转发代理设置
module.exports = {
  // 配置样例
  /* '/api': {
    target:         'http://localhost:3000',   必须       转发地址
    pathRewrite:    { '^/api': '' },           可选       是否删除 /api 前缀
    secure:         true,                      可选       是否检查安全问题
    changeOrigin:   false                      可选       如果设置成true, 发送请求头中host会设置成target
  } */
}
