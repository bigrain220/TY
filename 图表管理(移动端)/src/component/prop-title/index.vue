<template>
  <div class="f-s-20 f-w-bold p-y-10 p-relative b-b b-c-g-100">
    <span class="hover-parent">
      <span class="c-purple hover-inline-block p-absolute top-0 bottom-0 m-auto h-24" style="left:-20px">#</span>
      <span class="cursor-pointer" @click="anchorStart">{{name}}</span>
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  name: 'propTitle',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    // 跳转到描点
    anchorStart () {
      const header = document.querySelector('.app-header-layout')
      const rect = this.$el.getBoundingClientRect()
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      document.documentElement.scrollTop = document.body.scrollTop = scrollTop + rect.top - header.offsetHeight
    }
  }
}
</script>
