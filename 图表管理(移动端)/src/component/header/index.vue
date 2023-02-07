<template>
  <div class="app-header-layout p-fixed top-0 left-0 w-100-p p-l-10 b-b b-c-g-100 bg-white z-index-10">
    <div class="d-table w-100-p h-100-p">
      <div class="d-table-cell v-a-middle p-r-10" :style="{width:visible?'34px':'10px'}">
        <folder-component :visible="visible" />
      </div>
      <router-link :to="routerPrefixPath||'/'" class="d-table-cell v-a-middle cursor-default" style="width:36px">
        <img :src="baseURL+'/static/img/logo.png'" class="d-block h-auto user-select-none rounded" style="width:36px;" ondragstart="return false;" />
      </router-link>
      <router-link :to="routerPrefixPath||'/'" class="d-table-cell v-a-middle p-l-15 f-s-18 f-w-bold t-d-underline-hover cursor-default a-unstyle"
        style="width:260px">图表样式统一管理
      </router-link>
      <div class="d-table-cell v-a-middle">
        <div class="t-a-right p-r-20">
          <!-- <a class="a-unstyle button b-w-0 c-purple" :href="baseURL+'/static/file/doc.templet.zip'" download="doc.templet.zip" target="_blank">doc.templet.zip 下载</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-component',
  props: {
    visible: Boolean
  },
  inject: ['baseURL', 'routerPrefixPath'],
  data () {
    return {}
  }
}
</script>
