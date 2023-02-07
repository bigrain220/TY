<template>
  <div>
    <prop-title name="柱状图" class="m-b-20" />
    <!-- 柱状图 -->
    <p>图表中只有柱状图且只有⼀根柱状时展示柱状数值，数值放置于柱状上⽅</p>
    <p>柱状图的数值颜⾊为#333333</p>
    <demo-card class="m-t-10">
      <div slot="view" style="max-width:750px;">
        <Cell title="柱状图"></Cell>
        <div class="content hairline-top">
          <chart-bar :data="data" :setting='setting' id="chart-bar-1" :extend="extend"></chart-bar>
        </div>
      </div>
      <template slot="meta">
        <pre class="pre-code-layout">
           &lt;template>
             &lt;Cell title="柱状图"/>
             &lt;div class="content hairline-top">
               &lt;chart-bar :data="data" :setting='setting' id="chart-bar-1" :extend="extend"/>
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
                    columns: ['times', 'exceptionNumber'],
                    rows: [
                      { exceptionCompareNumber: 100, exceptionNumber: 200, times: '2022-01' },
                      { exceptionCompareNumber: 200, exceptionNumber: 300, times: '2022-02' },
                      { exceptionCompareNumber: 300, exceptionNumber: 410, times: '2022-03' },
                      { exceptionCompareNumber: 200, exceptionNumber: 300, times: '2022-04' },
                      { exceptionCompareNumber: 100, exceptionNumber: 200, times: '2022-05' },
                      { exceptionCompareNumber: 180, exceptionNumber: 300, times: '2022-06' },
                      { exceptionCompareNumber: 260, exceptionNumber: 360, times: '2022-07' }
                    ]
                  },
                  setting: {
                    labelMap: {
                      times: '日期',
                      exceptionNumber: '异常数'
                    }
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
    <!-- 双柱状 -->
    <demo-card>
      <div slot="view" style="max-width:750px;">
        <Cell title="双柱状"></Cell>
        <div class="content hairline-top">
          <chart-bar :data="data2" :setting='setting' id="chart-bar-2" :extend="extend"></chart-bar>
        </div>
      </div>
      <template slot="meta">
        <pre class="pre-code-layout">
           &lt;template>
             &lt;Cell title="双柱状"/>
             &lt;div class="content hairline-top">
               &lt;chart-bar :data="data" :setting='setting' id="chart-bar-2" :extend="extend"/>
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
                    columns: ['times', 'exceptionNumber', 'exceptionCompareNumber'],
                    rows: [
                      { exceptionCompareNumber: 100, exceptionNumber: 200, times: '2022-01' },
                      { exceptionCompareNumber: 200, exceptionNumber: 300, times: '2022-02' },
                      { exceptionCompareNumber: 300, exceptionNumber: 410, times: '2022-03' },
                      { exceptionCompareNumber: 200, exceptionNumber: 300, times: '2022-04' },
                      { exceptionCompareNumber: 100, exceptionNumber: 200, times: '2022-05' },
                      { exceptionCompareNumber: 180, exceptionNumber: 300, times: '2022-06' },
                      { exceptionCompareNumber: 260, exceptionNumber: 360, times: '2022-07' }
                    ]
                  },
                  setting: {
                    labelMap: {
                      times: '日期',
                      exceptionNumber: '异常数',
                      exceptionCompareNumber: '异常数对比'
                    }
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
    <!-- 多柱状 -->
    <demo-card>
      <div slot="view" style="max-width:750px;">
        <Cell title="多柱状"></Cell>
        <div class="content hairline-top">
          <chart-bar :data="data3" :setting='setting' id="chart-bar-3" :extend="extend"></chart-bar>
        </div>
      </div>
      <template slot="meta">
        <pre class="pre-code-layout">
           &lt;template>
             &lt;Cell title="多柱状"/>
             &lt;div class="content hairline-top">
               &lt;chart-bar :data="data" :setting='setting' id="chart-bar-3" :extend="extend"/>
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
                      { exceptionCompareNumber: 100, exceptionNumber: 200, exceptionOtherNumber: 200, times: '2022-01' },
                      { exceptionCompareNumber: 200, exceptionNumber: 300, exceptionOtherNumber: 300, times: '2022-02' },
                      { exceptionCompareNumber: 300, exceptionNumber: 410, exceptionOtherNumber: 400, times: '2022-03' },
                      { exceptionCompareNumber: 200, exceptionNumber: 300, exceptionOtherNumber: 500, times: '2022-04' },
                      { exceptionCompareNumber: 100, exceptionNumber: 200, exceptionOtherNumber: 600, times: '2022-05' },
                      { exceptionCompareNumber: 180, exceptionNumber: 300, exceptionOtherNumber: 700, times: '2022-06' },
                      { exceptionCompareNumber: 260, exceptionNumber: 360, exceptionOtherNumber: 800, times: '2022-07' }
                    ]
                  },
                  setting: {
                    labelMap: {
                      times: '日期',
                      exceptionNumber: '异常数',
                      exceptionCompareNumber: '异常数对比',
                      exceptionOtherNumber: '其它异常数'
                    }
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
import chartBar from '@/common/chart/chart-bar'
import demoCard from '@/common/demo/card'
export default {
  components: {
    Cell,
    chartBar,
    demoCard
  },
  data () {
    return {
      data: {
        columns: ['times', 'exceptionNumber'],
        rows: [
          { exceptionCompareNumber: 100, exceptionNumber: 200, times: '2022-01' },
          { exceptionCompareNumber: 200, exceptionNumber: 300, times: '2022-02' },
          { exceptionCompareNumber: 300, exceptionNumber: 410, times: '2022-03' },
          { exceptionCompareNumber: 200, exceptionNumber: 300, times: '2022-04' },
          { exceptionCompareNumber: 100, exceptionNumber: 200, times: '2022-05' },
          { exceptionCompareNumber: 180, exceptionNumber: 300, times: '2022-06' },
          { exceptionCompareNumber: 260, exceptionNumber: 360, times: '2022-07' }
        ]
      },
      data2: {
        columns: ['times', 'exceptionNumber', 'exceptionCompareNumber'],
        rows: [
          { exceptionCompareNumber: 100, exceptionNumber: 200, times: '2022-01' },
          { exceptionCompareNumber: 200, exceptionNumber: 300, times: '2022-02' },
          { exceptionCompareNumber: 300, exceptionNumber: 410, times: '2022-03' },
          { exceptionCompareNumber: 200, exceptionNumber: 300, times: '2022-04' },
          { exceptionCompareNumber: 100, exceptionNumber: 200, times: '2022-05' },
          { exceptionCompareNumber: 180, exceptionNumber: 300, times: '2022-06' },
          { exceptionCompareNumber: 260, exceptionNumber: 360, times: '2022-07' }
        ]
      },
      data3: {
        columns: ['times', 'exceptionNumber', 'exceptionCompareNumber', 'exceptionOtherNumber'],
        rows: [
          { exceptionCompareNumber: 100, exceptionNumber: 200, exceptionOtherNumber: 200, times: '2022-01' },
          { exceptionCompareNumber: 200, exceptionNumber: 300, exceptionOtherNumber: 300, times: '2022-02' },
          { exceptionCompareNumber: 300, exceptionNumber: 410, exceptionOtherNumber: 400, times: '2022-03' },
          { exceptionCompareNumber: 200, exceptionNumber: 300, exceptionOtherNumber: 500, times: '2022-04' },
          { exceptionCompareNumber: 100, exceptionNumber: 200, exceptionOtherNumber: 600, times: '2022-05' },
          { exceptionCompareNumber: 180, exceptionNumber: 300, exceptionOtherNumber: 700, times: '2022-06' },
          { exceptionCompareNumber: 260, exceptionNumber: 360, exceptionOtherNumber: 800, times: '2022-07' }
        ]
      },
      setting: {
        labelMap: {
          times: '日期',
          exceptionNumber: '异常数',
          exceptionCompareNumber: '异常数对比',
          exceptionOtherNumber: '其它异常数'
        }
      },
      extend: {

      }
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
