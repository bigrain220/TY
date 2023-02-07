import Vue from 'vue'
import { message } from 'yt-ui/lib/message'

const Instance = new Vue()

/**
 * 复制功能回调
 * @param  {string,number} text='--'
 */
export const copyHandler = (text = '--') => {
  Instance.$copyText(text + '').then((e) => {
    message({ status: 'success', title: '消息通知', message: '复制成功' })
  }, (e) => {
    alert('复制失败')
  })
}
