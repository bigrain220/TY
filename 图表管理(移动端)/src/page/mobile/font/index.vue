<template>
  <div>
    <font-body id="main" />
    <font-size id="other" />
  </div>
</template>
<script>

import fontBody from '@/page-view/mobile/font/body.vue'
import fontSize from '@/page-view/mobile/font/size.vue'
export default {
  components: { fontBody, fontSize }
}

</script>
