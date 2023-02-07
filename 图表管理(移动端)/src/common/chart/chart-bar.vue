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
      default: 'chart-bar'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '280px'
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
        color: [
          'rgba(36, 130, 252,0.25)',
          'rgba(243, 82, 82,0.25)',
          'rgba(230, 167, 51,0.25)',
          'rgba(59, 185, 80,0.25)',
          'rgba(122, 82, 230,0.25)',
          'rgba(109, 39, 99,0.25)',
          'rgba(86, 160, 176,0.25)',
          'rgba(131, 131, 131,0.25)'
        ],
        dataset: {
          dimensions: columns,
          source: rows
        },
        grid: {
          left: 40,
          right: 20,
          top: 45,
          bottom: 60
          // containLabel: true
          // show: true
          // backgroundColor: 'rgba(200,200,200,0.3)'
        },
        legend: {
          top: 15,
          right: 14,
          itemWidth: 10,
          itemHeight: 10,
          textStyle: { color: '#999999' },
          formatter: (params) => {
            const { labelMap } = this.setting
            return labelMap[params] ?? params
          }
        },
        xAxis: {
          type: 'category',
          // boundaryGap: false,
          // 坐标轴刻度标签
          axisLabel: {
            rotate: 35,
            color: '#999999'
          },
          // 坐标轴轴线
          axisLine: {
            lineStyle: {
              color: '#f1f1f1'
            }
          },
          // 坐标轴刻度
          axisTick: {
            lineStyle: {
              color: '#f1f1f1'
            }
          }
        },
        yAxis: {
          // 坐标轴刻度标签
          axisLabel: {
            color: '#999999'
            // formatter: (val) => {
            //   return this.unitHandler(val, true)
            // }
          },
          // 坐标轴在 grid 区域中的分隔线
          splitLine: {
            show: true,
            lineStyle: {
              color: '#f1f1f1'
            }
          },
          minInterval: 1
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          backgroundColor: 'rgba(50,50,50,0.7)',
          borderWidth: 0,
          padding: 5,
          textStyle: {
            color: '#fff'
          },
          formatter: (items) => {
            // console.log(items)
            const { labelMap } = this.setting
            let tpl = []
            const { name, axisValueLabel } = items[0]
            const title = name || axisValueLabel
            tpl.push(`${title}<br>`)
            items.forEach(({ seriesName, data, marker }) => {
              tpl.push(marker)
              let val = data[seriesName]
              tpl.push(`${labelMap[seriesName] ?? seriesName}: ${val}`)
              tpl.push('<br>')
            })
            return tpl.join('')
          }
        },
        series: columns.slice(1).map((item) => {
          return {
            type: 'bar',
            label: {
              show: columns.length - 1 === 1,
              color: '#333',
              position: 'top'
            },
            barGap: columns.length > 3 ? '1%' : columns.length === 3 ? '2%' : null
          }
        })
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
