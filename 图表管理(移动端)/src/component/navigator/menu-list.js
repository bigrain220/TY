
/** 菜单选项
 *  name      必填        菜单名称
 *  path      可选        页面路径,可以是外网 http、https 链接
 *  children  可选        子菜单
 *  hash      可选        用于页面锚点定位用
 *
 *  菜单可以是任意层级，路由页面中的锚点列表(示例内容)需要设置hash
 *
 */
export default [
  {
    name: '移动端',
    path: '/mobile',
    children: [
      {
        name: '颜色',
        path: '/color',
        children: [
          { name: '主色', hash: 'main' },
          { name: '文字、控件颜色', hash: 'other' }
        ]
      },
      {
        name: '文字',
        path: '/font',
        children: [
          { name: '字体', hash: 'body' },
          { name: '字号', hash: 'size' }
        ]
      },
      {
        name: '图标',
        path: '/icon',
        children: [
          { name: '图标用色定义', hash: 'menu' }
        ]
      },
      {
        name: '控件',
        path: '/control',
        children: [
          { name: '颜色', hash: 'color' },
          { name: '折线图', hash: 'line' },
          { name: '饼图', hash: 'pie' },
          { name: '柱状图', hash: 'bar' }
        ]
      }
    ]
  }, {
    name: 'pc端',
    path: '/pc',
    children: [
      { name: '色彩', hash: 'color' },
      { name: '文字', hash: 'font' }
    ]
  }
]
