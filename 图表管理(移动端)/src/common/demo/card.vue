<template>
  <div class="demo-card m-b-30 b-g-100 r-3">
    <div class="demo-view">
      <slot name="view"></slot>
    </div>
    <Transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave">
      <div class="demo-meta" v-show="isShowMeta">
        <slot name="meta"></slot>
      </div>
    </Transition>
    <div class="demo-control h-40 b-t-g-100 p-relative c-g-300 t-a-center c-lilac-hover bg-g-50-hover cursor-pointer" @click="isShowMeta=!isShowMeta">
      <span>{{isShowMeta?'隐藏源代码':'查看源代码'}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowMeta: false
    }
  },
  methods: {
    beforeEnter (el) {
      if (!el.dataset) el.dataset = {}

      el.dataset.oldPaddingTop = el.style.paddingTop
      el.dataset.oldPaddingBottom = el.style.paddingBottom

      el.style.maxHeight = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    },

    enter (el) {
      el.dataset.oldOverflow = el.style.overflow
      if (el.scrollHeight !== 0) {
        el.style.maxHeight = `${el.scrollHeight}px`
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom
      } else {
        el.style.maxHeight = 0
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom
      }

      el.style.overflow = 'hidden'
    },

    afterEnter (el) {
      el.style.maxHeight = ''
      el.style.overflow = el.dataset.oldOverflow
    },

    beforeLeave (el) {
      if (!el.dataset) el.dataset = {}
      el.dataset.oldPaddingTop = el.style.paddingTop
      el.dataset.oldPaddingBottom = el.style.paddingBottom
      el.dataset.oldOverflow = el.style.overflow

      el.style.maxHeight = `${el.scrollHeight}px`
      el.style.overflow = 'hidden'
    },

    leave (el) {
      if (el.scrollHeight !== 0) {
        el.style.maxHeight = 0
        el.style.paddingTop = 0
        el.style.paddingBottom = 0
      }
    },

    afterLeave (el) {
      el.style.maxHeight = ''
      el.style.overflow = el.dataset.oldOverflow
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
    }
  }
}
</script>

<style lang='scss' scoped>
.demo-card {
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }
  .demo-meta {
    transition: all 0.3s ease-in-out;
  }
  .demo-control {
    line-height: 40px;
  }
}
</style>
