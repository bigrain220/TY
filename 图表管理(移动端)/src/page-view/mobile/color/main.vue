<template>
  <div>
    <prop-title name="主色" class="m-b-20"/>
    <div v-for="(item,index) in list" :key="index" class="p-b-20">
      <p class="f-w-bold f-s-14 p-b-10">{{item.title}}</p>
      <div v-for="childItem in item.color" :key="childItem" @click="$copyHandler(childItem)" class="d-inline-block r-2 m-r-20  p-y-10 p-x-20 c-white copy-text"
        :style="{'background':childItem}">{{childItem}}</div>
      <div v-for="childItem in item.description" :key="childItem" :style="{color:'#999999'}" class="m-t-6">{{childItem}}</div>
    </div>
  </div>
</template>

<script>
import { configColor } from '@/util/mobile/config-data'
export default {
  data () {
    return {
      list: configColor.main
    }
  },
  methods: {

  }
}
</script>
