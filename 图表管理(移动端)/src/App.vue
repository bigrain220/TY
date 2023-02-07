<template>
  <div class="app-layout" :class="[unfolded?'unfolded':'folded']" id="appLayout" style="min-height:calc(100vh - 60px)">
    <header-component :visible="visible" data-scroll="stop" />
    <navigator-component data-scroll="stop" />
    <div class="container-layout">
      <div class="w-100-p p-x-30 p-y-20 m-auto f-s-14" id="routerLayout">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { isIe } from '@/util/util.js'
export default {
  data () {
    return {
      unfolded: true,
      visible: false
    }
  },
  provide () {
    return {
      toggleFolderStatus: this.toggle
    }
  },
  methods: {
    toggle () {
      this.unfolded = !this.unfolded
      setTimeout(() => {
        if (!isIe) window.dispatchEvent(new Event('resize'))
      }, 220)
    },
    // 监听窗口宽度大小
    resizeEvent () {
      let visible = window.innerWidth < 992
      this.visible = visible
    }
  },
  mounted () {
    this.resizeEvent()
    window.addEventListener('resize', this.resizeEvent)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resizeEvent)
  }
}
</script>
