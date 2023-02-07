// 驼峰转中划线的方式 AbcDef > abc-def
export function getInlineName (name = '') {
  name = name.replace(/([A-Z])/g, function (str, s1, index) {
    return (index === 0 ? '' : '-') + s1.toLowerCase()
  })
  // 移除末尾的 -
  name = name.replace(/-$/, '')
  return name
}

// 中划线转驼峰的方式 abc-def > abcDef
export function getHumpName (name = '') {
  name = name.replace(/-(.)/g, function (str, s1, index) {
    return s1.toUpperCase()
  })
  // 移除末尾的 -
  name = name.replace(/-$/, '')
  return name
}

// 注册组件
export function installComponent (Com) {
  return function (Vue, optiops) {
    // 驼峰转中划线的方式
    let name = getInlineName(Com.name)
    if (name) Vue.component(name, Com)
  }
}

// 注册指令
export function installDirective (name, Dir) {
  return function (Vue, optiops) {
    if (name) Vue.directive(name, Dir)
  }
}

// 注册过滤器
export function installFilter (name, filter) {
  return function (Vue, optiops) {
    if (name) Vue.filter(name, filter)
  }
}
