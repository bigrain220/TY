export const configColor = {
  main: [
    {
      title: '主色',
      color: ['#2482FC'],
      description: ['品牌主色，常用于主要操作按钮，指示条，大数据趋势图主色，高亮选中等区域。']
    },
    {
      title: '辅色',
      color: ['#F35252', '#E6A733', '#3BB950', '#7A52E6', '#6D2763', '#56A0B0', '#838383'],
      description: ['辅助色，辅助品牌主色，常用于主要操作按钮，指示条，大数据趋势图、饼图主色，高亮选中等区域。']
    },
    {
      title: '指标色值',
      color: ['#3BB950', '#F35252'],
      description: ['#3BB950用于大数据数值中“好的指标”', '#F35252用于大数据数值中“不好的指标”']
    }
  ],
  other: [
    {
      title: '/ R.51 G.51 B.51',
      color: '#333333',
      description: '⼀级信息、标题、主内容⽂字等'
    },
    {
      title: '/ R.102 G.102 B.102',
      color: '#666666',
      description: '普通级别⽂字、协议⻚正⽂内容⽂字等'
    },
    {
      title: '/ R.153 G.153 B.153',
      color: '#999999',
      description: '辅助⽂字、次要信息等'
    },
    {
      title: '/ R.233 G.233 B.233',
      color: '#E9E9E9',
      description: '分割线等'
    },
    {
      title: '/ R.245 G.245 B.245',
      color: '#F5F5F5',
      description: '⻚⾯最底层背景等'
    }
  ]
}

export const configFont = {
  body: [
    {
      title: 'PingFang SC（Medium)',
      value: 'Aa',
      description: '⽤于部分标题等'
    },
    {
      title: 'PingFang SC（Regular)',
      value: 'Aa',
      description: '⽤于⼤多数正⽂⽂字'
    }
  ],
  size: [
    {
      title: '驾驶舱',
      value: '19PT',
      description: '⽤于重点数据⽂字'
    },
    {
      title: '驾驶舱',
      value: '16PT',
      description: '⽤于TAB⽂字等'
    },
    {
      title: '驾驶舱',
      value: '14PT',
      description: '⽤于标题⽂字、主⽂字等'
    },
    {
      title: '驾驶舱',
      value: '12PT',
      description: '⽤于列表⽂字等'
    },
    {
      title: '驾驶舱',
      value: '11PT',
      description: '⽤于图表坐标描述等'
    }
  ]
}

export const configIcon = {
  menu: [
    {
      title: '一级菜单',
      content: [
        {
          color: '#2482FC',
          description: '全链路、⽹络、⼈资、中⼼管理'
        },
        {
          color: '#F35252',
          description: '预警、异常'
        },
        {
          color: '#E6A733',
          description: '投诉、跟踪、⻛险'
        },
        {
          color: '#3BB950',
          description: '财务、增⻓、服务'
        },
        {
          color: '#7A52E6',
          description: '客服、时效、市场、圆通国际'
        }
      ]
    },
    {
      title: '二级菜单',
      content: [
        {
          color: '',
          description: '与⼀级菜单icon⾊值保持⼀致'
        }
      ]
    }
  ]
}

export const configControlColor = {
  color: [
    {
      title: '折线图、饼图依次取⾊',
      description: '',
      content: [
        {
          color: '#2482FC'
        },
        {
          color: '#F35252'
        },
        {
          color: '#E6A733'
        },
        {
          color: '#3BB950'
        },
        {
          color: '#7A52E6'
        },
        {
          color: '#6D2763'
        },
        {
          color: '#56A0B0'
        },
        {
          color: '#838383'
        }
      ]
    },
    {
      title: '柱状图',
      description: '柱状图因占⽤⾯积⽐较⼤，有其特殊性，所有⾊值在驾驶舱颜⾊的基础上叠加透明度为75%的⽩⾊，以降低其饱和度来提⾼⽤户视觉体验。',
      content: [
        {
          color: 'rgba(36, 130, 252,0.25)'
        },
        {
          color: 'rgba(243, 82, 82,0.25)'
        },
        {
          color: 'rgba(230, 167, 51,0.25)'
        },
        {
          color: 'rgba(59, 185, 80,0.25)'
        },
        {
          color: 'rgba(122, 82, 230,0.25)'
        },
        {
          color: 'rgba(109, 39, 99,0.25)'
        },
        {
          color: 'rgba(86, 160, 176,0.25)'
        },
        {
          color: 'rgba(131, 131, 131,0.25)'
        }
      ]
    }
  ]
}
