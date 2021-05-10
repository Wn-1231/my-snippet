## 贝壳找房

- vue 双向绑定原理

- key 的作用

- es6 与 es5 继承

- 数据类型哪几种

- null 和 undefined 的区别

- 项目上遇到的难点及解决

- 项目上做过哪些优化

- http 层优化，缓存

- 组件库与模板介绍

- commonjs 与 esm 区别

- 一道题

```js
/**
 * 难度：*
 * 实现一个自定义事件的 事件派发器，可以绑定事件 & 回调函数，销毁事件
 */

const emitter = new EventEmitter()

function cb() {}

emitter.on('callSomething', cb)

// emitter.off('callSomething');

emitter.off('callSomething', cb)

emitter.dispatch('callSomething', 'hello world')
```

## 同程艺龙一面

- 动态态类型理解

- 静态与动态理解

- 尾调用优化

- 几种数据类型

- bigint 解决什么问题，有什么问题

- map weakMap

- set weakSet

- set 转数组

- call apply

- 2 == [[[2]]]

- js 单线程问题

- event-loop

- nodejs event-loop

- nexttick 与 setimm

- 浏览器哪些线程

- try catch 能捕获 setTimeout 里的错误吗

- settimeout 与 setinterval 用哪个

- settimeout 时间限制

- http header Content-length

- 浏览器同源策略的目的

- 怎么解决跨域

- cors 怎么设置

- lock 文件的作用

ts 相关

- never any unknown 类型区别

- 可以把 unknown 赋值给 number 类型吗

不行

- 可以把 never 类型赋值给 any 类型吗，或者把 any 类型赋值给 never 类型

- 什么是交叉类型

- 两个 object  交叉类型怎么区分

- 类型谓词

## 跟谁学一面

- vue3 的变化

- 题

```js
function format(tpl, data) {}

console.log(format('hello ${name}, ${age}', { name: 'jack', age: 18 }))
console.log(format('hello ${user.name}', { user: { name: 'jack' } }))
```

- 题

```js
function merge(a1, a2) {}

var a1 = [1, 3, 4, 8]
var a2 = [2, 4, 7]
// a = [1, 2, 3, 4, 4, 7, 8]

merge(a1, a2)
```

- 题

```js
createArray(value, length)

const arr = createArray(1, 5) // [1, 1, 1, 1, 1]
console.log(arr[0].length) // 报错Property 'length' does not exist on type 'number'.
createArray('1', 5) // ['1', '1', '1', '1', '1']
console.log(arr[0].length) // 正常

function createArray(value) {
  return [value]
}
```

- webpack 怎么处理

- vue.use 做了什么

- vue 响应式原理

- git reset 与 git revert

- git reset hard mixed soft

## 美图秀秀一面

- react hooks 解决了什么问题

- useEffect 怎么做清除工作

- useEffect 怎么做依赖可以是 props 么

- useEffect 依赖是深比较还是浅比较

- setState 的理解

- react 生命周期

- 错误处理的生命周期钩子

- promise

- promise 有哪些静态方法

- promise.all 如果有一个失败，但又想拿到另外成功的结果怎么办

- vue 响应式原理

- vue 有哪些导航守卫

- 从一个组件离开到另一个组件触发哪些导航守卫

- vue3 改为 proxy 为什么

- webpack 组成部分

- chunk

- publicPath 有什么用

- 什么是单点登录

- 性能优化怎么做

- 移动端适配是怎么做的

## 作业帮

- 组件间通讯

- event bus

- v-model 原理

- 拷贝 cookie 的问题要怎么解决

- key

- 常用设计模式

- vuex 是做什么的

- 手写防抖 节流，怎么一开始就执行一次

- 输出什么

```js
console.log('1')

setTimeout(function () {
  console.log('2')
  new Promise(function (resolve) {
    console.log('3')
    resolve()
  }).then(function () {
    console.log('4')
  })
})
new Promise(function (resolve) {
  console.log('5')
  resolve()
}).then(function () {
  console.log('6')
})

setTimeout(function () {
  console.log('7')
  new Promise(function (resolve) {
    console.log('8')
    resolve()
  }).then(function () {
    console.log('9')
  })
})
```

- 实现深拷贝

```js
var obj = {
  a: 1,
  b: 2,
  c: [1, 2, 3],
  d: { aa: 1, bb: 2 },
}
obj.e = obj
```

- 爬楼梯

- css 层叠上下文

- 装饰器

- 浏览器调度

## 美团一面

- 后处理器的了解 postcss，除了 autoprefixer，还有哪些

- scss 的好处

- css 分层

- css 有哪些模式

- 前端工程化的了解

- 上线是怎么做的

- 移动端适配怎么做的

- rem em px 区别

- es6 有哪些常用

- let const var 的区别

- 箭头函数与普通函数区别

- 变量提升原理

- vue composition api 介绍，解决了哪些问题

- promise 介绍

- async await 怎么实现

- vue3 新增了什么，除了 composition api

- ts 的好处

- 实现发布订阅模式

## 跟谁学二面

- vue react 区别

- react 怎么实现 vue 里的 v-model computed watch

- http2 与 https

- websocket

- keep-alive

- 性能优化

- 浏览器渲染原理

- 介绍一个项目

- 平时怎么学习

- 做题

找出数组中第 k 大的数组出现多少次，比如数组【1，2，4，4，3，5】第二大的数字是 4，出现两次，所以返回 2

## 百度三面

- 'aabbccdd' 每个字母出现的次数

- 二叉树

- http 三次握手

- sql 语句

- 'aabbcccaaaaa' 打出重复次数最多的字母重复的个数

- 循环除 3

## 58 同城

- 小程序 setData

- 实现 new apply bind

- 闭包 全局环境闭包

- 移动端适配

- 1px 实现原理

- vue proxy

- http2

- 事件机制

- webpack 热更新原理

- 浏览器缓存机制

- BFC

- 深度优先遍历与广度优先遍历

深度优先遍历：从根节点出发，沿着左子树方向进行纵向遍历，直到找到叶子节点为止。然后回溯到前一个节点，进行右子树节点的遍历，直到遍历完所有可达节点为止。

广度优先遍历：从根节点出发，在横向遍历二叉树层段节点的基础上纵向遍历二叉树的层次。

## 滴滴一面

- https 怎么保证安全的

- tcp 三次握手与四次挥手

- 常用的 loader 与 plugin

- 四层协议

- 从输入 url 到页面展示发生了什么

- 怎么做性能优化

- jsonp 原理

- 跨域以及解决方案

- es6 常用

- 事件模型

- 事件级别

- 实现 fbnj 数列前 n 项和

- http1 http1.1 http2 http3

- keep-alive 与 websocket

## 顺丰

- 实现 instanceOf

- 下面打印出什么

```js
setTimeout(function () {
  console.log('timeout1')
})

new Promise(function (resolve) {
  console.log('promise1')
  for (let i = 0; i < 1000; i++) {
    if (i == 99) {
      resolve(1)
    }
  }
  console.log('promise2')
}).then(function () {
  console.log('then1')
})

console.log('global1')
```

## 美图二面

- 长列表优化
- 下拉加载与上拉刷新
- 不规则多边形

## 水滴

- DOM0 事件与 DOM1 事件 区别 好处

- 事件流

- 防抖 节流 第一次触发

- 回流，流少回流

## 滴滴二面

- 304 body 体

- http 缓存 哪些协商 哪些强

- cors option 哪些是简单请求 哪些是非简单请求

## 去哪儿

- css 盒模型

```js
function Fn() {}

Fn.prototype.x = 10

var a1 = new Fn()

Fn.prototype = { x: 20, y: 30 }
// Fn.prototype.y = {x: 20, y: 30}

var a2 = new Fn()

console.log(a1.x) // 10
console.log(a1.y) // undefined
console.log(a2.x) // 20
console.log(a2.y) // 30
```

```js
Function.prototype.x = 'aaa'

function myFunc() {}

var func = new myFunc()

console.log(func.x) // undefined
console.log(myFunc.x) // aaa
```

```js
var arr = []

function test() {
  for (var i = 0; i < 5; i++) {
    arr.push(function () {
      return i * i
    })
  }

  return arr
}

var test1 = test()

console.log(test1[0]()) // 25
console.log(test1[2]()) // 25
```

- es6 常用

- commonjs 与 es module

- 插入 12 [1,2,3,4]

- 两列布局 左自适应 右 100px

- flex 是哪几个的缩写

## 百度二面

- 两个栈模拟一个队列

- 数组有哪些迭代方法

- 实现 flat

- vue 哪些不常用的特性

- 一个最难的问题是怎么解决的
