<template>
  <div>
    <prop-title name="饼图" class="m-b-20" />
    <demo-card>
      <div slot="view" style="max-width:750px;">
        <Cell title="分布图"></Cell>
        <div class="content hairline-top">
          <chart-pie :data="data" :setting='setting' :extend="extend"></chart-pie>
        </div>
      </div>
      <template slot="meta">
        <pre class="pre-code-layout">
            &lt;template>
            &lt;div>
              &lt;Cell title="分布图"/>
              &lt;div class="content hairline-top">
                &lt;chart-pie :data="data" :setting='setting' :extend="extend"/>
              &lt;/div>
            &lt;/div>
            &lt;template>
            &lt;script>
            import Cell from '@/common/cell/index'
            import chartPie from '@/common/chart/chart-pie'
            export default {
              components: {
                Cell,
                chartPie,
              },
              data () {
                return {
                  data: {
                    columns: ['exceptionNameStr', 'twoExceptionNumber'],
                    rows: [
                      { exceptionNameStr: '催揽收', twoExceptionNumber: 32, exceptionResponsibilityUser: null, exceptionResponsibilityUserNumber: 0 },
                      { exceptionNameStr: '催取件', twoExceptionNumber: 20, exceptionResponsibilityUser: null, exceptionResponsibilityUserNumber: 0 },
                      { exceptionNameStr: '催派件', twoExceptionNumber: 18, exceptionResponsibilityUser: null, exceptionResponsibilityUserNumber: 0 },
                      { exceptionNameStr: '催中转', twoExceptionNumber: 12, exceptionResponsibilityUser: null, exceptionResponsibilityUserNumber: 0 },
                      { exceptionNameStr: '其它', twoExceptionNumber: 28, exceptionResponsibilityUser: null, exceptionResponsibilityUserNumber: 0 }
                    ]
                  },
                  setting: {

                  },
                  extend: {

                  }
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
import chartPie from '@/common/chart/chart-pie'
import demoCard from '@/common/demo/card'
export default {
  components: {
    Cell,
    chartPie,
    demoCard
  },
  data () {
    return {
      data: {
        columns: ['exceptionNameStr', 'twoExceptionNumber'],
        rows: [
          { exceptionNameStr: '催揽收', twoExceptionNumber: 32, exceptionResponsibilityUser: null, exceptionResponsibilityUserNumber: 0 },
          { exceptionNameStr: '催取件', twoExceptionNumber: 20, exceptionResponsibilityUser: null, exceptionResponsibilityUserNumber: 0 },
          { exceptionNameStr: '催派件', twoExceptionNumber: 18, exceptionResponsibilityUser: null, exceptionResponsibilityUserNumber: 0 },
          { exceptionNameStr: '催中转', twoExceptionNumber: 12, exceptionResponsibilityUser: null, exceptionResponsibilityUserNumber: 0 },
          { exceptionNameStr: '其它', twoExceptionNumber: 28, exceptionResponsibilityUser: null, exceptionResponsibilityUserNumber: 0 }
        ]
      },
      setting: {

      },
      extend: {

      }
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
