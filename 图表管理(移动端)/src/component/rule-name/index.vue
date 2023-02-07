<template>
  <div class="m-y-5 m-t-14 f-s-16">
    <span>{{name}}</span>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ruleName',
  props: {
    name: {
      type: String,
      default: '命名规则：'
    }
  }
}
</script>
