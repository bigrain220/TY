<template>
  <div>
    <prop-title name="字号" class="m-b-20" />
    <div v-for="(item,index) in list" :key="index" class="o-hidden">
      <div class="f-left w-80" :style="{'font-size':item.value,'line-height':'60px'}">{{item.value}}</div>
      <div class="f-left w-100 p-l-6" :style="{'font-size':item.value,'line-height':'60px'}">{{item.title}}</div>
      <div class="f-left p-l-10"  style="color:#676776;line-height:60px">{{item.description}}</div>
    </div>
  </div>
</template>

<script>
import { configFont } from '@/util/mobile/config-data'
export default {
  data () {
    return {
      list: configFont.size
    }
  },
  methods: {

  }
}
</script>
