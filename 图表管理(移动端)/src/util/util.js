// 获取DOM元素样式属性
export function getElementStyle (element, attr) {
  // IE
  if (element.currentStyle) {
    return element.currentStyle[attr]
  } else {
    // getComputedStyle 第二个参数支持伪元素(":before" ":after")
    return getComputedStyle(element, null)[attr]
  }
}

// 判断浏览器
export const isIe = (function () {
  return 'ActiveXObject' in window
})()

// 判断是否为 html5 声明;<!doctype html>
export const isHtml5 = (function () {
  let doctype = document.documentElement.parentNode.doctype
  return (
    doctype && doctype.name === 'html' && !doctype.publicId && !doctype.systemId
  )
})()

export function getBodyHeight () {
  if (isIe || (isHtml5 && !isIe)) {
    return document.documentElement.clientHeight
  } else {
    return document.body.clientHeight
  }
}
