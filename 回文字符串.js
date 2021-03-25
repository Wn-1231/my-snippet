// https://itnext.io/11-way-to-check-for-palindromes-in-javascript-85dbfe7dfb5d

function foo(s) {
  const str = s.replace(/[\W_]/g, '').toLowerCase()
  return str === str.split('').reverse().join('')
}

foo('A man, a plan, a canal: Panama')
