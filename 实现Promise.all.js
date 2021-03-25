// 手动实现 Promise.all

// 参考：
// https://segmentfault.com/a/1190000010765655
// https://medium.com/@muralikv/implementing-promise-all-in-javascript-732076497946

// 关于 Promise.all
// https://es6.ruanyifeng.com/#docs/promise#Promise-all
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

// Promise.all 的特点
// 1. 接收一个promise实例的数组或具有Iterator接口的对象
// 2. 如果元素不是promise 则调用Promise.resolve转为promise对象
// 3. 所有promise成功，状态变炒resolve 返回值组成一个数组传给回调
// 4. 只要有一个失败，状态变为reject 返回值传给回调

function asyncOperation (time) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (time === 2000) {
              reject('error on 2000')
          }

          resolve(time)
      }, time)
  })
}

// Pseudocode
// 接受参数promise数组（Iterator）
// 如果不是promise对象，使用Promise.resolve转为promise对象
// 返回值是一个promise
// 所有promise成功则reslove，结果数组按顺序传给回调
// 如果有一个失败则reject

Promise.myAll = function (promises) {
  let results = []
  let completedPromises = 0


  return new Promise((resolve, reject) => {
      promises.forEach((promise, index) => {
          Promise.resolve(promise).then(res => {
              results[index] = res
              completedPromises += 1

              if (completedPromises === promises.length) {
                  resolve(results)
              }
          }).catch(err => {
              reject(err)
          })
      })
  })
}

// 测试用例
var promisesToMake1 = [asyncOperation(1000), asyncOperation(1000), asyncOperation(3000)]
var promisesToMake2 = [1,2,3]
var promisesToMake3 = [asyncOperation(1000), 1, Promise.resolve(2)]
var promisesToMake4 = [asyncOperation(1000), 1, asyncOperation(2000)]
var promisesToMake5 = 'hello'

var promisesToMake = promisesToMake4

// var promises = Promise.all(promisesToMake) // 原生
var promises = Promise.myAll(promisesToMake) // 自己实现

promises.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})