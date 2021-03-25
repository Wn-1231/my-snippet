// https://www.codewars.com/kata/56a115cadb39a2faa000001e/solutions/javascript

function foo(num) {
  return (+num.toFixed(3) + '').replace(/\d(?=(\d{3})+($|\.))/g, '$&,')
}

foo(-1019234801211.214)
