<template>
  <!-- 折叠器 -->
  <div class="w-24 p-x-3 p-y-5 folder-layout" @click="clickEvent" v-show="visible">
    <div class="h-2 r-2 bg-g-400 folder-line-one"></div>
    <div class="m-t-4 h-2 r-2 bg-g-400 folder-line-two"></div>
    <div class="m-t-4 h-2 r-2 bg-g-400 folder-line-three"></div>
  </div>
</template>

<script>
export default {
  name: 'folder-component',
  inject: ['toggleFolderStatus'],
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    clickEvent () {
      this.toggleFolderStatus()
    }
  }
}
</script>

<style lang="scss">
.folder-line-one,
.folder-line-two,
.folder-line-three {
  transform-origin: 0px 1px;
  transition: all 0.2s;
}

.app-layout.unfolded {
  .folder-line-two {
    opacity: 0;
  }

  .folder-line-one {
    transform: rotate(43deg);
  }

  .folder-line-three {
    transform: rotate(-43deg);
  }
}
</style>
