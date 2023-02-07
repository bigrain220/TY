<template>
  <div class="p-fixed left-0 top-60 bottom-0 p-b-30 b-r b-c-g-100 o-y-auto z-index-10 bg-white navigator-layout">
    <navigator-menu :items="items" :full-path="fullPath" ref="navigator" />
  </div>
</template>
<script>
import { getElementStyle } from '@/util/util.js'
import menuList from './menu-list'
import NavigatorMenu from './menu'
export default {
  name: 'navigator-component',
  components: {
    NavigatorMenu
  },
  data () {
    return {
      items: [],
      container: null,
      // 记录当前路由状态
      fullPath: '',
      pathname: '',
      hash: '',
      // scrollTop 标记当前滚动状态
      scrollTop: 0,
      menuClickFlag: false,
      // 判断浏览器
      isFirefox: false,
      scrollTopArr: []
    }
  },
  provide () {
    return {
      menuClickEvent: this.menuClickEvent,
      arrowClickEvent: this.arrowClickEvent
    }
  },
  inject: ['routerPrefixPath'],
  methods: {
    // 菜单点击事件
    menuClickEvent (item) {
      let { path = '' } = item
      // 打开或关闭子菜单(判断是否为当前路径，是则关闭菜单，否则打开菜单)
      if (path === this.pathname) item.folded = !item.folded
    },
    // 点击菜单小箭头，打开或关闭带单
    arrowClickEvent (item) {
      item.folded = !item.folded
    },
    // 监听滚动事件, 设置 this.fullPath、pathname、hash、改变浏览器地址、打开菜单
    scrollEvent () {
      if (this.menuClickFlag) {
        this.menuClickFlag = false
        return
      }
      if (!this.routerLayout.children[0]) return
      const children = this.routerLayout.children[0].children
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      const containerPT = parseInt(getElementStyle(this.routerLayout, 'paddingTop'))
      let heightCount = containerPT
      let hash = ''
      this.scrollTop = scrollTop
      if (scrollTop >= containerPT) {
        for (let node of children) {
          heightCount += node.offsetHeight
          if (heightCount - scrollTop > 0) {
            hash = node.id
            break
          }
        }
      }
      const { pathname, search } = window.location
      if (this.pathname !== pathname || this.hash !== hash) {
        hash = hash.replace('#', '').replace('/', '')
        this.fullPath = pathname + (hash ? '#' + hash : '')
        this.pathname = pathname
        this.hash = hash
        history.replaceState(null, null, pathname + search + (hash ? '#' + hash : ''))
        this.findMenuAndOpen(pathname)
      }
    },
    // 找出菜单的位置并打开
    findMenuAndOpen (fullPath) {
      let stop = false
      const loop = (arr = []) => {
        for (let item of arr) {
          if (item.fullPath === fullPath) {
            item.folded = false
            stop = true
            // 等待页面路由渲染、延时执行对比
            setTimeout(() => {
              this.scrollIntoView()
            }, 100)
            break
          }
          if (item.children.length > 0) {
            loop(item.children)
            // 处理父级数据
            if (stop) {
              item.folded = false
              break
            }
          }
        }
      }
      loop(this.items)
    },
    // 菜单当前位置显示在窗口内部
    scrollIntoView () {
      const tree = this.$refs.navigator.$el.children
      let stop = false
      const loop = (arr) => {
        for (let node of arr) {
          if (stop) break
          const aNode = node.children[0]
          const ulNode = node.children[1].children
          if (!aNode || !ulNode) {
            stop = true
            break
          }
          const pathname = aNode.getAttribute('data-pathname') || ''
          const hash = aNode.getAttribute('data-hash') || ''
          if (this.pathname === pathname && this.hash === hash) {
            let offsetParent = aNode.offsetParent
            let offsetTopCount = aNode.offsetTop
            while (offsetParent) {
              if (offsetParent === this.$el) {
                offsetParent = null
              } else {
                offsetTopCount += offsetParent.offsetTop
                offsetParent = offsetParent.offsetParent
              }
            }
            const offsetTopCountSelf = offsetTopCount
            offsetTopCount += aNode.offsetHeight
            let scrollTop = this.$el.scrollTop
            // 如果当前菜单在滚动条底部
            if (scrollTop + this.$el.clientHeight < offsetTopCount) {
              this.$el.scrollTop = scrollTop + (offsetTopCount - (scrollTop + this.$el.clientHeight)) + this.$el.clientHeight / 2
            } else if (scrollTop > offsetTopCountSelf) {
              this.$el.scrollTop = scrollTop - (scrollTop - offsetTopCountSelf) - this.$el.clientHeight / 2
            }
            stop = true
            break
          }
          if (ulNode && ulNode.length > 0) {
            loop(ulNode)
          }
        }
      }
      loop(tree)
    },
    // 自动加载下一个页面 -------------------------------------------------------------------------
    mousewheelEvent (event) {
      let parent = event.srcElement
      let contain = document.getElementById('appLayout').contains(parent)
      if (!contain) return
      while (parent) {
        if (parent.getAttribute && parent.getAttribute('data-scroll') === 'stop') {
          parent = null
          return
        } else {
          parent = parent.parentNode
        }
      }
      let wheelDelta = event.wheelDelta
      if (this.isFirefox) wheelDelta = -event.detail
      this.scrollTopArr.push(this.scrollTop)
      const arr = this.scrollTopArr.slice(0).reverse()
      if (arr[0] === arr[1] && arr[0] === arr[3]) {
        let next_item = null
        this.scrollTopArr = []
        if (wheelDelta < 0) {
          next_item = this.findNextItem('down')
        } else {
          next_item = this.findNextItem('up')
        }
        this.loadNextRoute(next_item)
      }
    },
    // 找出下一个元素
    findNextItem (dir) {
      const fullPath = this.pathname + (this.hash ? '#' + this.hash : '')
      let stop = false
      let find = false
      let next_item = null
      const loop = (arr = []) => {
        for (let i = 0; i < arr.length; i++) {
          const item = arr[i]
          if (item.fullPath === fullPath) {
            if (dir === 'up' && i > 0) {
              find = true
              next_item = this.findLastItem(arr[i - 1])
            } else if (dir === 'down' && item.children.length > 0) {
              find = true
              next_item = item.children[0]
            }
            stop = true
            if (item.hash || (dir === 'up' && i === 0)) {
              // 跳到"上一个递归"
              break
            } else if (dir === 'down' && item.children.length === 0) {
              // 平级菜单链接
              find = true
              next_item = arr[i + 1]
            }
          }
          loop(item.children)
          if (find) break
          // "上一个递归"
          if (stop) {
            if (dir === 'down' && i < arr.length - 1) {
              // 父级所在位置的下一个兄弟元素
              find = true
              next_item = arr[i + 1]
            } else if (dir === 'up' && item.pathProxy) {
              // 此时不会触发滚动事件需要手动赋值
              find = true
              this.fullPath = item.path + (item.hash ? '#' + item.hash : '')
              this.pathname = item.path
              this.hash = item.hash
              next_item = item
            } else if (dir === 'up' && i > 0) {
              // 父级所在位置的上一个兄弟元素
              find = true
              next_item = arr[i - 1]
              next_item = this.findLastItem(next_item)
            }
          }
        }
      }
      loop(this.items)
      return next_item
    },
    // 找出指定数据的最后、最底层元素
    findLastItem (item) {
      let last_item = null
      const loop = (arr) => {
        const item = arr[arr.length - 1]
        if (item.children.length) {
          loop(item.children)
        } else {
          last_item = item
        }
      }
      if (item.children.length) {
        loop(item.children)
      } else {
        last_item = item
      }
      return last_item
    },
    // 加载下一个页面
    loadNextRoute (item) {
      if (!item) return
      this.$router.push({
        path: item.path,
        hash: item.hash
      })
    },
    // 初始化菜单
    itemsHander (items) {
      const loop = function (arr = [], parentPath = '') {
        for (let i = 0; i < arr.length; i++) {
          const item = arr[i]
          // 设置菜单的折叠状态
          item.folded = true
          // 拼接子父级路由拼接的路径
          item.pathProxy = item.path || ''
          if (!/^http[s]?/.test(item.path)) {
            if (item.path === '/') {
              item.path = parentPath
            } else {
              item.path = parentPath + (item.path || '')
            }
            // 设置 fullPath 属性
            item.fullPath = item.path + (item.hash ? '#' + item.hash : '')
          }
          if (!item.children) item.children = []
          if (item.children.length) loop(item.children, item.path)
        }
      }
      loop(items, this.routerPrefixPath)
      return items
    }
  },
  watch: {
    $route: {
      handler: function (to = {}) {
        let { fullPath, path, hash } = to
        hash = hash.replace('#', '').replace('/', '')
        this.fullPath = path + (hash ? '#' + hash : '')
        this.pathname = path
        this.hash = hash
        this.findMenuAndOpen(fullPath)
      }
    }
  },
  created () {
    // 更新菜单引用
    this.items = this.itemsHander(menuList)
  },
  mounted () {
    this.routerLayout = document.getElementById('routerLayout')
    window.addEventListener('scroll', this.scrollEvent)
    this.isFirefox = navigator.userAgent.indexOf('Firefox') > 0
    if (this.isFirefox) {
      document.addEventListener('DOMMouseScroll', this.mousewheelEvent)
    } else {
      document.addEventListener('mousewheel', this.mousewheelEvent)
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollEvent)
    if (this.isFirefox) {
      document.removeEventListener('DOMMouseScroll', this.mousewheelEvent)
    } else {
      document.removeEventListener('mousewheel', this.mousewheelEvent)
    }
  }
}
</script>

<style lang="scss">
.navigator-layout {
  &::-webkit-scrollbar {
    width: 6px;
    height: 8px;
    background-color: rgb(241, 241, 241);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(209, 209, 209);
  }
}
</style>
