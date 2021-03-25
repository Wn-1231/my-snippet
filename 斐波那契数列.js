function fib1(n) {
  if (n === 1)
      return 1
  if (n === 2)
      return 2

  return f(n - 1) + f(n - 2)
}

function fib2(n) {
  let top = 1
  let bottom = 0
  let result = 0

  for (let i = 0; i < n; i++) {
      result = top + bottom
      bottom = top
      top = result
  }
  return result
}

fib(3)
