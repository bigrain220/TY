<template>
  <div>
    <prop-title name="字体" class="m-b-20"/>
    <p class="c-pink p-b-20">注：ios使⽤的PingFang字体，前端⻚⾯在不同的⼿机上会使⽤对应系统的默认字体。</p>
    <div v-for="(item,index) in list" :key="index" class="p-b-20 o-hidden h-">
        <div class="f-left p-x-24 p-y-24">{{item.value}}</div>
        <div class="f-left m-l-20">
          <div :style="{'color':'#333333'}" class="p-t-10">{{item.title}}</div>
          <div :style="{'color':'#666666'}" class="p-y-10">{{item.description}}</div>
        </div>
    </div>
  </div>
</template>

<script>
import { configFont } from '@/util/mobile/config-data'
export default {
  data () {
    return {
      list: configFont.body
    }
  },
  methods: {

  }
}
</script>
