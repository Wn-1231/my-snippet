// 参考： https://dev.to/kamaal/understanding-by-making-your-own-javascript-call-apply-bind-5238

var name = 'hello'

var obj = {
    name: 'hi',
    foo () {
        console.log('inner foo')
    }
}

var obj2 = {
    name: 'hey'
}

function foo(age, gender) {
    console.log(`name: ${this.name}, age: ${age}, gender: ${gender}`)
}

// 思路：将要改变this指向的方法挂到目标this上执行并返回
Function.prototype.myCall = function(context, ...rest) {
    context = context || window
    const fnName = Math.random().toString(16).slice(2)
    context[fnName] = this
    const result = context[fnName](...rest)
    delete context[fnName]
    return result
}

Function.prototype.myApply = function(context, rest) {
    context = context || window
    const fnName = Math.random().toString(16).slice(2)
    context[fnName] = this
    const result = context[fnName](rest)
    delete context[fnName]
    return result
}

// foo()
// foo.call(null, 11, 'male')
// foo.myCall(null, 11, 'male')
// foo.call(obj, 12, 'female')
foo.myCall(obj, 12, 'female')
// foo.call(obj2)

// foo.apply(null, [11, 'male'])

// Math.max.call(null, ...[1,2,3])
