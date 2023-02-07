<template>
  <div>
    <control-color id="color" />
    <control-line id="line" />
    <control-pie id="pie" />
    <control-bar id="bar" />
     <control-bar-line id="bar-line" />
  </div>
</template>
<script>

import controlColor from '@/page-view/mobile/control/color.vue'
import controlLine from '@/page-view/mobile/control/line.vue'
import controlPie from '@/page-view/mobile/control/pie.vue'
import controlBar from '@/page-view/mobile/control/bar.vue'
import controlBarLine from '@/page-view/mobile/control/bar-line.vue'
export default {
  components: { controlColor, controlLine, controlPie, controlBar, controlBarLine }
}

</script>
