<template>
  <div>
    <div v-if="!data.rows.length" :style="{width:this.width,height:this.height,lineHeight:this.height}" class="t-a-center">暂无数据</div>
    <div v-else :id="id" :style="{width:this.width,height:this.height}"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  props: {
    id: {
      type: String,
      default: 'chart-pie'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '220px'
    },
    data: {
      type: Object,
      default: () => {
        return {
          columns: [],
          rows: []
        }
      }
    },
    setting: {
      type: Object,
      default: () => {
        return {}
      }
    },
    extend: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      myChart: {},
      option: {}
    }
  },
  watch: {
    extend: {
      deep: true,
      immediate: true,
      handler (val) {
        this.$nextTick(() => {
          val && this.myChart.setOption(val)
        })
      }
    }
  },
  methods: {
    initChart () {
      let myChart = echarts.init(document.getElementById(this.id))
      this.myChart = myChart
      let { columns, rows } = this.data
      let option = {
        color: ['#2482FC', '#F35252', '#E6A733', '#3BB950', '#7A52E6', '#6D2763', '#56A0B0', '#838383'],
        dataset: {
          dimensions: columns,
          source: rows
        },
        tooltip: {
          show: true,
          trigger: 'item',
          backgroundColor: 'rgba(50,50,50,0.7)',
          borderWidth: 0,
          padding: 5,
          textStyle: {
            color: '#fff'
          },
          formatter: (items) => {
            // console.log(items)
            let { seriesName, data, marker, percent } = items
            return `${marker} ${data[seriesName]}: ${data[columns[1]]} (${percent}%)`
          }
        },
        series:
        {
          type: 'pie',
          radius: ['50%', '70%'],
          label: {
            show: true,
            color: 'inherit', // 继承color配置的颜色,
            formatter: '{b}\n({d}%)'
          }
        }
      }
      this.option = option
      this.myChart.setOption(option)
      window.addEventListener('resize', this.resizeEvent)
    },
    resizeEvent () {
      this.myChart.resize()
    }
  },
  mounted () {
    if (this.data.rows.length) {
      this.initChart()
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resizeEvent)
  }
}
</script>
