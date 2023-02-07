<template>
  <div>
    <prop-title name="柱状图+折线图" class="m-b-20" />
    <p>出现柱状图与折线图组合的情况，柱状数据不展示，折线数据按照折线规范展示。</p>
    <demo-card class="m-t-10">
      <div slot="view" style="max-width:750px;">
        <Cell title="双柱状"></Cell>
        <div class="content hairline-top">
          <chart-bar-line :data="data" :setting='setting' id="chart-bar-line-1" :extend="extend"></chart-bar-line>
        </div>
      </div>
      <template slot="meta">
        <pre class="pre-code-layout">
           &lt;template>
             &lt;Cell title="双柱状"/>
             &lt;div class="content hairline-top">
               &lt;chart-bar-line :data="data" :setting='setting' id="chart-bar-line-1" :extend="extend"/>
             &lt;/div>
           &lt;/template>
           &lt;script>
            import Cell from '@/common/cell/index'
            import chartBarLine from '@/common/chart/chart-bar-line'
            export default {
              components: {
                Cell,
                chartBarLine
              },
              data () {
                return {
                  data: {
                    columns: ['times', 'exceptionNumber', 'exceptionCompareNumber', 'exceptionOtherNumber'],
                    rows: [
                      { exceptionCompareNumber: 100, exceptionNumber: 200, exceptionOtherNumber: 200, times: '11-01' },
                      { exceptionCompareNumber: 200, exceptionNumber: 300, exceptionOtherNumber: 300, times: '11-02' },
                      { exceptionCompareNumber: 300, exceptionNumber: 410, exceptionOtherNumber: 400, times: '11-03' },
                      { exceptionCompareNumber: 200, exceptionNumber: 300, exceptionOtherNumber: 500, times: '11-04' },
                      { exceptionCompareNumber: 100, exceptionNumber: 200, exceptionOtherNumber: 650, times: '11-05' },
                      { exceptionCompareNumber: 180, exceptionNumber: 300, exceptionOtherNumber: 500, times: '11-06' },
                      { exceptionCompareNumber: 260, exceptionNumber: 360, exceptionOtherNumber: 600, times: '11-07' }
                    ]
                  },
                  setting: {
                    labelMap: {
                      times: '日期',
                      exceptionNumber: '异常数',
                      exceptionCompareNumber: '异常数对比',
                      exceptionOtherNumber: '其它异常数'
                    },
                    showLine: ['exceptionNumber']
                  },
                  extend: {

                  },
                }
              }
            }
           &lt;/script>
        </pre>
      </template>
    </demo-card>
    <demo-card>
      <div slot="view" style="max-width:750px;">
        <Cell title="柱状图+曲线"></Cell>
        <div class="content hairline-top">
          <chart-bar-line :data="data" :setting='setting2' id="chart-bar-line-2" :extend="extend2"></chart-bar-line>
        </div>
      </div>
      <template slot="meta">
        <pre class="pre-code-layout">
           &lt;template>
             &lt;Cell title="柱状图+曲线"/>
             &lt;div class="content hairline-top">
               &lt;chart-bar-line :data="data" :setting='setting' id="chart-bar-line-2" :extend="extend"/>
             &lt;/div>
           &lt;/template>
           &lt;script>
            import Cell from '@/common/cell/index'
            import chartBarLine from '@/common/chart/chart-bar-line'
            export default {
              components: {
                Cell,
                chartBarLine
              },
              data () {
                return {
                  data: {
                    columns: ['times', 'exceptionNumber', 'exceptionCompareNumber', 'exceptionOtherNumber'],
                    rows: [
                      { exceptionCompareNumber: 100, exceptionNumber: 200, exceptionOtherNumber: 200, times: '11-01' },
                      { exceptionCompareNumber: 200, exceptionNumber: 300, exceptionOtherNumber: 300, times: '11-02' },
                      { exceptionCompareNumber: 300, exceptionNumber: 410, exceptionOtherNumber: 400, times: '11-03' },
                      { exceptionCompareNumber: 200, exceptionNumber: 300, exceptionOtherNumber: 500, times: '11-04' },
                      { exceptionCompareNumber: 100, exceptionNumber: 200, exceptionOtherNumber: 650, times: '11-05' },
                      { exceptionCompareNumber: 180, exceptionNumber: 300, exceptionOtherNumber: 500, times: '11-06' },
                      { exceptionCompareNumber: 260, exceptionNumber: 360, exceptionOtherNumber: 600, times: '11-07' }
                    ]
                  },
                  setting: {
                    labelMap: {
                      times: '日期',
                      exceptionNumber: '异常数',
                      exceptionCompareNumber: '异常数对比',
                      exceptionOtherNumber: '其它异常数'
                    },
                    showLine: ['exceptionNumber', 'exceptionCompareNumber']
                  },
                  extend: {

                  },
                }
              }
            }
           &lt;/script>
        </pre>
      </template>
    </demo-card>
  </div>
</template>

<script>
import Cell from '@/common/cell/index'
import chartBarLine from '@/common/chart/chart-bar-line'
import demoCard from '@/common/demo/card'
export default {
  components: {
    Cell,
    chartBarLine,
    demoCard
  },
  data () {
    return {
      data: {
        columns: ['times', 'exceptionNumber', 'exceptionCompareNumber', 'exceptionOtherNumber'],
        rows: [
          { exceptionCompareNumber: 100, exceptionNumber: 200, exceptionOtherNumber: 200, times: '11-01' },
          { exceptionCompareNumber: 200, exceptionNumber: 300, exceptionOtherNumber: 300, times: '11-02' },
          { exceptionCompareNumber: 300, exceptionNumber: 410, exceptionOtherNumber: 400, times: '11-03' },
          { exceptionCompareNumber: 200, exceptionNumber: 300, exceptionOtherNumber: 500, times: '11-04' },
          { exceptionCompareNumber: 100, exceptionNumber: 200, exceptionOtherNumber: 650, times: '11-05' },
          { exceptionCompareNumber: 180, exceptionNumber: 300, exceptionOtherNumber: 500, times: '11-06' },
          { exceptionCompareNumber: 260, exceptionNumber: 360, exceptionOtherNumber: 600, times: '11-07' }
        ]
      },
      setting: {
        labelMap: {
          times: '日期',
          exceptionNumber: '异常数',
          exceptionCompareNumber: '异常数对比',
          exceptionOtherNumber: '其它异常数'
        },
        showLine: ['exceptionNumber']
      },
      setting2: {
        labelMap: {
          times: '日期',
          exceptionNumber: '异常数',
          exceptionCompareNumber: '异常数对比',
          exceptionOtherNumber: '其它异常数'
        },
        showLine: ['exceptionNumber', 'exceptionCompareNumber']
      },
      extend: {

      },
      extend2: {
        // 需要自定义icon,或者所有legend等宽
        // legend: {
        //   itemWidth: 10,
        //   itemHeight: 10,
        //   data: [
        //     {
        //       name: 'exceptionNumber',
        //       itemStyle: {
        //         opacity: 0
        //       },
        //       lineStyle: {
        //         width: 1
        //       }
        //       // icon: 'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z'
        //     },
        //     {
        //       name: 'exceptionCompareNumber',
        //       itemStyle: {
        //         opacity: 0
        //       },
        //       lineStyle: {
        //         width: 1
        //       }
        //     },
        //     {
        //       name: 'exceptionOtherNumber',
        //       icon: 'rect'
        //     }
        //   ]
        // }
        // 需要手动配置定位
        // legend: [
        //   {
        //     itemWidth: 12,
        //     itemHeight: 2,
        //     top: 15,
        //     right: 14,
        //     formatter: (params) => {
        //       const { labelMap } = this.setting
        //       return labelMap[params] ?? params
        //     },
        //     data: [{ name: 'exceptionNumber', icon: 'rect' }] // rect为矩形
        //   },
        //   {
        //     itemWidth: 12,
        //     itemHeight: 2,
        //     top: 15,
        //     right: 80,
        //     formatter: (params) => {
        //       const { labelMap } = this.setting
        //       return labelMap[params] ?? params
        //     },
        //     data: [{ name: 'exceptionCompareNumber', icon: 'rect' }] // rect为矩形
        //   },
        //   {
        //     itemWidth: 12,
        //     itemHeight: 12,
        //     top: 15,
        //     right: 170,
        //     formatter: (params) => {
        //       const { labelMap } = this.setting
        //       return labelMap[params] ?? params
        //     },
        //     data: [{ name: 'exceptionOtherNumber', icon: 'rect' }] // rect为矩形
        //   }
        // ],
      }
    }
  },
  mounted () {

  }
}
</script>

<style lang='scss' scoped>
</style>
