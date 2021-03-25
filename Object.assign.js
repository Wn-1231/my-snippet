Object.myAssign = function(target, ...source) {
  for (var i = 0; i < source.length; i++) {
      for (var key in source[i]) {
          if (Object.prototype.hasOwnProperty.call(source[i], key)) {
              target[key] = source[i][key]
          }
      }
  }
  
  return target
}

var foo = {
  a: 1,
  b: 2
}

var bar = {
  b: 3
}

// console.log(Object.assign({}, foo, bar))
console.log(Object.myAssign({}, foo, bar))
