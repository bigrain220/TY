<template>
  <div>
    <color-main id="main" />
    <color-other id="other" />
  </div>
</template>
<script>

import colorMain from '@/page-view/mobile/color/main.vue'
import colorOther from '@/page-view/mobile/color/other.vue'
export default {
  components: { colorMain, colorOther }
}

</script>
