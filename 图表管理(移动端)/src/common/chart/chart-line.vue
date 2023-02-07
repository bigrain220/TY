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
      default: 'chart-line'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '280px'
    },
    rotate: {
      type: Number,
      default: 0
    },
    unitShow: {
      type: Boolean,
      default: true
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
  computed: {
    // 单位标识
    unitCom () {
      let { columns, rows } = this.data
      let flag = 1
      columns.slice(1).forEach(key => {
        for (const item of rows) {
          if (typeof (item[key]) === 'number') {
            if (this.getUnit(item[key]) > flag) {
              flag = this.getUnit(item[key])
              if (flag === 3) break
            }
          }
        }
      })
      return flag
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
        tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              type: 'solid'
            }
          },
          backgroundColor: 'rgba(50,50,50,0.7)',
          borderWidth: 0,
          padding: 5,
          textStyle: {
            color: '#fff'
          },
          formatter: (items) => {
            const { labelMap } = this.setting
            let tpl = []
            const { name, axisValueLabel } = items[0]
            const title = name || axisValueLabel
            tpl.push(`${title}<br>`)
            items.forEach(({ seriesName, data, marker }) => {
              tpl.push(marker)
              let val = data[seriesName]
              tpl.push(`${labelMap[seriesName] ?? seriesName}: ${this.unitHandler(val)}`)
              tpl.push('<br>')
            })
            return tpl.join('')
          }
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
          itemWidth: 16,
          itemHeight: 2,
          icon: 'roundRect',
          textStyle: { color: '#999999' },
          formatter: (params) => {
            const { labelMap } = this.setting
            return labelMap[params] ?? params
          }
        },
        dataset: {
          dimensions: columns,
          source: rows
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          // 坐标轴刻度标签
          axisLabel: {
            rotate: 45,
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
            color: '#999999',
            formatter: (val) => {
              return this.unitHandler(val, true)
            }
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
        series: columns.slice(1).map(item => {
          // const { labelMap } = this.setting
          return {
            // name: labelMap[item],
            type: 'line',
            label: {
              show: true,
              color: 'inherit', // 继承color配置的颜色,
              rotate: this.rotate,
              formatter: (params) => {
                const { data, seriesName } = params
                const val = data[seriesName]
                return this.unitHandler(val)
              }
            },
            symbol: 'circle',
            emphasis: {
              scale: 2 // 从 v5.0.0 开始支持,默认1.1
            }
          }
        })
      }
      this.option = option
      this.myChart.setOption(option)
      window.addEventListener('resize', this.resizeEvent)
    },
    resizeEvent () {
      this.myChart.resize()
    },
    unitHandler (val, flag) {
      const unit = this.unitCom
      if (!this.unitShow) {
        return val
      }
      // 小于10000
      if (unit === 1) {
        return val
        // 10000≤且＜1百万
      } else if (unit === 2) {
        return (flag ? Number(val / 10000) : Number(val / 10000).toFixed(2)) + '万'
        // 1百万以上
      } else if (unit === 3) {
        return parseInt(val / 10000 / 100) + '百万'
      }
    },
    getUnit (val) {
      if (val < 10000) {
        return 1
      } else if (val < (100 * 10000)) {
        return 2
      } else if (val > (100 * 10000)) {
        return 3
      }
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

<style lang='scss' scoped>
</style>
