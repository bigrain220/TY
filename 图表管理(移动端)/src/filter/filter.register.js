// 获取所有组件
const files = require.context('@/filter/', true, /\/index.js$/)

// 批量注册
export default {
  install: function (Vue, options) {
    files.keys().map(key => {
      Vue.use(files(key).default, options)
    })
  }
}
