import Vue from 'vue'
import VueRouter from 'vue-router'
import { getHumpName } from '@/util'
Vue.use(VueRouter)

// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

// 获取路径前缀
const serverPrefixPath = process.env.serverPrefixPath

// 设置路由的 component
// ./index.vue                >     /
// ./path1/child/index.vue    >     /path1/child
function getPath (key) {
  let replace = '/'
  let path = serverPrefixPath + key.replace('./', replace).replace('/index.vue', '')
  return path || '/'
}

// 设置路由的 name , 把文件路径变为驼峰命名
// ./index.vue              >   index
// path1/child/index.vue    >   path1ChildIndex
function getName (key) {
  key = key.replace(/\.\/|\.vue/g, '').replace(/\//g, '-')
  return getHumpName(key)
}

// 动态获取路由
// const files = require.context('@/page/', true, /\/index.vue$/, 'lazy')
const files = require.context('@/page/', true, /\/index.vue$/, 'lazy')
const filesRouter = files.keys().map(key => {
  return {
    path: getPath(key),
    name: getName(key),
    component: () => import('@/page/' + key.replace('./', ''))
  }
})
let router = {
  mode: 'history',
  routes: [
    ...filesRouter,
    {
      path: '*',
      redirect: serverPrefixPath || '/'
    }
  ]
}
if (navigator.userAgent.indexOf('MSIE 9.0;') === -1) {
  router.scrollBehavior = function (to, from, savedPosition) {
    if (to.hash) {
      return {
        // 跳转指定锚点
        selector: to.hash
      }
    } else {
      return {
        x: 0, y: 0
      }
    }
  }
}
router = new VueRouter(router)
export default router
