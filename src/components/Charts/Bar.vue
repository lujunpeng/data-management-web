<template>
  <div id="chartBar"></div>
</template>

<script>
import VChart from '@/plugins/andtv-g2'
import { onMounted, watch } from 'vue'
export default {
  name: 'ChartBar',
  props: {
    id: {
      type: String,
      default: 'chartBar'
    },
    data: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    let chart

    // 监听数据变化
    watch(
      () => props.data,
      newData => {
        chart.data(newData)
        chart.render() // 更新图表
      }
    )

    onMounted(() => {
      chart = new VChart({
        container: props.id,
        width: 500,
        height: 400
      })
      chart.data(props.data)
      chart.scale({
        value: {
          max: 1400,
          min: 0,
          alias: '销量（百万）'
        }
      })
      chart.axis('type', {
        title: null,
        tickLine: null,
        line: null
      })

      chart.axis('value', {
        label: null,
        title: {
          offset: 30,
          style: {
            fontSize: 12,
            fontWeight: 300
          }
        }
      })
      chart.legend(false)
      chart.coordinate().transpose()
      chart
        .interval()
        .position('type*value')
        .size(26)
        .label('value', {
          style: {
            fill: '#8d8d8d'
          },
          offset: 10
        })
      chart.interaction('element-active')
      // chart.render()
    })
  }
}
</script>

<style scoped lang="scss"></style>
