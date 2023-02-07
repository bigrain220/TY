const fs = require('fs')
const path = require('path')

// 这里可以自定义文件路径，建议是项目中的文件
const scssFilename = './variables-default.scss'
const lessFilename = './variables-default.less'

// 获取变量文件
const scssPromise = new Promise(resolve => {
  // 这里可以自定义变量文件
  const filename = path.resolve(__dirname, scssFilename)
  fs.readFile(filename, {
    encoding: 'utf-8'
  }, function (error, data) {
    // eslint-disable-next-line no-console
    if (error) console.log(error)
    resolve(dataHandler(data) || '')
  })
})

const lessPromise = new Promise(resolve => {
  // 这里可以自定义变量文件
  const filename = path.resolve(__dirname, lessFilename)
  fs.readFile(filename, {
    encoding: 'utf-8'
  }, function (error, data) {
    // eslint-disable-next-line no-console
    if (error) console.log(error)
    resolve(dataHandler(data) || '')
  })
})

function dataHandler (data = '') {
  return data
  // 删除注释、换行等不可见字符
  // return data.replace(/\/\/.*\n|\/\*[\S\s]*\*\/|\s/g, '')
}

module.exports = new Promise(resolve => {
  Promise.all([scssPromise, lessPromise]).then(([scssData, lessData]) => {
    resolve({ scssData, lessData })
  },
  () => {
    resolve({ })
  })
})
