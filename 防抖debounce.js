// js 实现防抖函数
function debounce (fn, wait) {
  let timeoutID = null

  return function (...args) {
      const context = this

      if (timeoutID) {
          clearTimeout(timeoutID)
      }

      timeoutID = setTimeout(() => {
          timeoutID = null
          fn.call(context, ...args)
      }, wait)
  }
}

function debounce (fn, wait, immediate) {
  let timeoutID = null

  return function (...args) {
      const context = this
      const nowCall = immediate && !timeoutID

      if (timeoutID) {
          clearTimeout(timeoutID)
      }

      timeoutID = setTimeout(() => {
          timeoutID = null

          if (!immediate) {
              fn.call(context, ...args)   
          }
      }, wait)

      if (nowCall) {
          fn.call(context, ...args)
      }
  }
}