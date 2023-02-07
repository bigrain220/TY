<template>
  <div>
    <prop-title name="图表用色规范" class="m-b-20" />
    <div v-for="(item,index) in list" :key="index" class="p-b-20">
      <p class="f-w-bold f-s-14 p-b-10">{{item.title}}</p>
      <div v-for="childItem in item.content" :key="childItem.color" class="d-inline-block m-r-20 m-b-24 w-60 h-60 p-relative" :style="{'background':childItem.color}">
        <span class="p-absolute f-s-12 copy-text t-o-ellipsis o-hidden w-s-nowrap w-100-p" style="bottom:-24px;left:0;" @click="$copyHandler(childItem.color)" :title="childItem.color">{{childItem.color}}</span>
      </div>
      <div class="m-t-10 c-g-600">{{item.description}}</div>
    </div>
  </div>
</template>

<script>
import { configControlColor } from '@/util/mobile/config-data'
export default {
  data () {
    return {
      list: configControlColor.color
    }
  },
  methods: {

  }
}
</script>
