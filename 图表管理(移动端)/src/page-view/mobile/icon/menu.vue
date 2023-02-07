<template>
  <div>
    <prop-title name="图标用色定义" class="m-b-20" />
    <div v-for="(item,index) in list" :key="index" class="p-b-20 o-hidden">
      <li>{{item.title}}</li>
      <div v-for="childItem in item.content" :key="childItem.color" class="o-hidden p-y-10">
        <div v-if="childItem.color" class="f-left f-s-12 t-a-center m-r-20 c-white copy-text" :style="{'background':childItem.color,'padding':'20px 60px'}" @click="$copyHandler(childItem.color)">{{childItem.color}}</div>
        <div class="f-left p-y-20">{{childItem.description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { configIcon } from '@/util/mobile/config-data'
export default {
  data () {
    return {
      list: configIcon.menu
    }
  },
  methods: {

  }
}
</script>
