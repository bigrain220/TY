<template>
  <ul class="p-0 m-0 menu-layout">
    <li class="l-s-t-none p-l-20 p-relative" :style="liStyleCp" v-for="item in items" :key="item.name || item.hash">
      <router-link v-if="!/^http[s]?/.test(item.path)" class="p-relative d-block p-y-5 p-r-30 a-unstyle c-purple-hover cursor-default t-d-underline-hover"
        :data-pathname="item.path" :data-hash="item.hash" :style="liAStyleCp" :class="[fullPath===item.fullPath?'router-link-exact-active-custom':'']"
        :to="{path:item.path, hash:item.hash}" @click.native="menuClickEvent(item)">
        {{item.name || item.hash}}
        <span class="p-absolute menu-after-active" :style="afterStyleCp"></span>
        <div class="p-absolute top-0 bottom-0 right-0 m-auto w-30 h-20  o-0-4 o-1-hover" @click.stop.prevent="arrowClickEvent(item)">
          <span class="p-absolute top-0 bottom-0 right-0 left-0 m-auto" :class="[item.folded?'arrow-down-element':'arrow-up-element']"
            v-show="item.children.length>0"></span>
        </div>
      </router-link>
      <a v-else :href="item.path" target="_blank" class="d-block p-y-5 p-r-30 a-unstyle c-purple-hover cursor-default t-d-underline">{{item.name}}</a>
      <navigator-menu :items="item.children" :tree-index="treeIndex+1" :full-path="fullPath" :folded="item.folded" v-show="!item.folded" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'navigator-menu',
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    },
    fullPath: String,
    treeIndex: {
      type: Number,
      default: 0
    },
    folded: {
      type: Boolean,
      default: true
    }
  },
  inject: ['menuClickEvent', 'arrowClickEvent'],
  computed: {
    liStyleCp () {
      return {
        fontSize: this.treeIndex === 0 ? '16px' : this.treeIndex === 1 ? '14px' : '13px'
      }
    },
    liAStyleCp () {
      return {
        fontWeight: this.treeIndex === 0 ? 'bold' : ''
      }
    },
    afterStyleCp () {
      return {
        marginLeft: (this.treeIndex + 1) * -20 + 'px'
      }
    }
  }
}
</script>
<style lang="scss">
.navigator-layout > ul.menu-layout {
  > li {
    margin-top: 4px;
  }
}
.router-link-exact-active-custom {
  color: #6b2494;
  font-weight: bold;
  .menu-after-active {
    display: block;
  }
}
.menu-after-active {
  display: none;
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0px;
  width: 4px;
  background-color: #592894;
}
</style>
