<template>
  <div>
    <prop-title name="文字、控件颜色" class="m-b-20" />
    <div v-for="(item,index) in list" :key="index" class="m-b-20 h-30 l-h-30 o-hidden">
      <div class="rounded w-30 h-100-p f-left" :style="{'background':item.color}"></div>
      <div class="f-left p-l-10 copy-text" @click="$copyHandler(item.color)">{{item.color}}</div>
      <div class="f-left p-l-4" style="width:150px;">{{item.title}}</div>
      <div class="f-left p-l-30" style="color:#676776;">{{item.description}}</div>
    </div>
  </div>
</template>

<script>
import { configColor } from '@/util/mobile/config-data'
export default {
  data () {
    return {
      list: configColor.other
    }
  },
  methods: {

  }
}
</script>
