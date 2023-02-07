<template>
  <div>
    <prop-title name="折线图" class="m-b-20" />
    <p>当数据多于4位数时，允许斜放,通过配置rotate属性</p>
    <p>折线图中的数值默认展示规则:
      1、小于10000, 显示具体数值，保留⼩数点后两位;&nbsp;&nbsp;&nbsp;&nbsp;2、10000≤且＜1百万, 缩写“0.23/23.35”;&nbsp;&nbsp;&nbsp;&nbsp;3、1百万以上保留整数, 缩写“234”</p>
    <demo-card class="m-t-10">
      <div slot="view" style="max-width:750px;">
        <Cell title="趋势图"></Cell>
        <div class="content hairline-top">
          <chart-line :data="data" :setting='setting' :extend="extend"></chart-line>
        </div>
      </div>
      <template slot="meta">
        <pre class="pre-code-layout">
          &lt;template>
          &lt;div>
            &lt;Cell title="趋势图"/>
            &lt;div class="content hairline-top">
              &lt;chart-line :data="data" :setting='setting' :extend="extend"/>
            &lt;/div>
          &lt;/div>
          &lt;template>
          &lt;script>
          import Cell from '@/common/cell/index'
          import chartLine from '@/common/chart/chart-line'
          export default {
            components: {
              Cell,
              chartLine
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
                extend: {}
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
import chartLine from '@/common/chart/chart-line'
import demoCard from '@/common/demo/card'
export default {
  components: {
    Cell,
    chartLine,
    demoCard
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
      extend: {}
    }
  },
  mounted () {

  }
}
</script>

<style lang='scss' scoped>
</style>
