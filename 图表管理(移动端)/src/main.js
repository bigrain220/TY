// css文件
import '@/style.entry'

// Vue 项目的入口文件
import Vue from 'vue'
import App from '@/App'
import store from './store'
import VueClipboard from 'vue-clipboard2'

// 组件
import components from '@/component/component.register'

// 指令
import directives from '@/directive/directive.register'

// 过滤器
import filters from '@/filter/filter.register'

// 路由
import router from '@/router'

// 按需引入
import Message from 'yt-ui/lib/message/index.js'
import 'yt-ui/lib/style/message/index.scss'
Vue.use(Message)

// 全局注册
Vue.use(components)
Vue.use(directives)
Vue.use(filters)
Vue.use(VueClipboard)

/**
 * 全局注册复制功能
 * @param  {string,number} text='--'
 */
Vue.prototype.$copyHandler = (text = '--') => {
  Vue.prototype.$copyText(text + '').then((e) => {
    Vue.prototype.$yt.message({ status: 'success', title: '消息通知', message: '复制成功' })
  }, (e) => {
    alert('复制失败')
  })
}

Vue.config.productionTip = process.env.NODE_ENV === 'development'

new Vue({
  el: '#app',
  store: store,
  provide: {
    baseURL: process.env.publicPathCDNURL || process.env.serverPrefixPath,
    routerPrefixPath: process.env.serverPrefixPath
  },
  router: router,
  components: {
    app: App
  },
  template: '<app />'
})
